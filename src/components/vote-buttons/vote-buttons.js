import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import "./vote-buttons.css";

const VoteButtons = ({ post }) => {

    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
    const [votedPosts, setVotedPosts] = useState([]);

    useEffect(() => {
        const voteFromLocalStorage = localStorage.getItem("votes") || [];
        let previousVotes = [];

        try {
            previousVotes = JSON.parse(voteFromLocalStorage);
        } catch (error) {
            console.error(error);
        }

        setVotedPosts(previousVotes);
    }, []);

    const handleDisableVoting = (postId) => {
        const previousVotes = votedPosts;
        previousVotes.push(postId);
        setVotedPosts(previousVotes);
        localStorage.setItem("votes", JSON.stringify(votedPosts));
    };

    const handleClick = async (type) => {

        let upVotesCount = post.upVotesCount;
        let downVotesCount = post.downVotesCount;

        const date = new Date();

        if (type === "upvote") {
            if (!upvoted) {
                if (downvoted) {
                    upVotesCount = upVotesCount + 2;
                } else {
                    upVotesCount = upVotesCount + 1;
                }
                setUpvoted(true);
                setDownvoted(false);
            } else {
                upVotesCount = upVotesCount - 1;
                setUpvoted(false);
            }

        } else {
            if (!downvoted) {
                if (upvoted) {
                    downVotesCount = downVotesCount + 2
                } else {
                    downVotesCount = downVotesCount + 1;
                }
                setDownvoted(true);
                setUpvoted(false);
            } else {
                downVotesCount = downVotesCount - 1;
                setDownvoted(false);
            }
        }

        await db.collection("posts").doc(post.id).set({
            comments: post.comments,
            createdBy: post.createdBy,
            subreddit: post.subreddit,
            title: post.title,
            upVotesCount,
            downVotesCount,
            createdAt: post.createdAt,
            updatedAt: date.toUTCString(),
        });

        handleDisableVoting(post.id);
    };

    return (
        <div className="karma-wrapper">
            <Arrow upvoted={upvoted} onClick={() => handleClick("upvote")}>
                <span>&#129959;</span>
            </Arrow>
            {post.upVotesCount - post.downVotesCount}
            <Arrow downvoted={downvoted} onClick={() => handleClick("downvote")}>
                <span>&#129958;</span>
            </Arrow>
        </div>
    );
};

export default VoteButtons;

const Arrow = styled.span`
    color: ${props => props.upvoted ? 'rgba(0,220,0,0.7)' : 'rgb(84,84,84)'};
    color: ${props => props.downvoted ? 'rgba(250,0,0,0.7)' : 'rgb(84,84,84)'};
`;