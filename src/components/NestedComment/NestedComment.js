import { useState } from "react";
import styled from "styled-components";
import CommentReply from "../CommentReply/CommentReply";

const NestedComment = (props) => {

    const [text, setText] = useState('');
    const [commenting, setCommenting] = useState(false);

    const handleClick = () => {
        setCommenting(true);  
    };

    console.log(props.comment.text)

    return (

        <NestedWrapper>
            <CommentTop>
                <Author>{props.comment.createdBy}</Author>
                <Karma>{props.comment.upVotesCount - props.comment.downVotesCount} points</Karma>
                <TimePosted>{props.comment.createdAt}</TimePosted>
            </CommentTop>
            <CommentText> {props.comment.text} </CommentText>
            <Controls>
                <span>
                    <span>permalink</span>
                    <span>source</span>
                    <span>embed</span>
                    <span>save</span>
                    <span>parent</span>
                    <span>report</span>
                    <span>give award</span>
                    <span onClick={handleClick}>reply</span>
                </span>
            </Controls>
            <CommentReply 
                parentID={props.comment.commentId}
                postId={props.comment.postId}
                text={text}
                commenting={commenting}
                setText={setText}
                setCommenting={setCommenting}
            />
        </NestedWrapper>

    )

};

export default NestedComment;

export const NestedWrapper = styled.div`
    background-color: rgb(39,39,39);
    color: #ddd;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    margin: 5px 0px 0px 30px;
    padding: 10px 0px 10px 20px;
    text-align: left;
    width: 100%;
`;

export const CommentText = styled.div`
    color: #fff;
    font-size: 0.9rem;
`;

export const CommentTop = styled.div`
    display: flex;
    font-size: 0.75rem;
    gap: 10px;
`;

export const Author = styled.div`
    color: rgb(106, 152, 175);
    cursor: pointer;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

export const Karma = styled.div`
    color: rgb(180,180,180);
    font-size: 0.65rem;
    font-weight: bold;
`;

export const TimePosted = styled.div`
    color: rgb(140,140,140);
    font-size: 0.65rem;
`;

export const Controls = styled.div`
    color: #888;
    cursor: pointer;
    font-size: 0.65rem;
    margin: 4px 0px 0px 0px;
    text-align: left;

    & > span > span {
        cursor: pointer;
        font-size: 0.73rem;
        font-weight: 600;
        margin: 0px 8px 0px 0px;
        &:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 768px) {
        color: #bbb;
        font-size: 0.65rem;
        font-weight: 300;
        margin-top: 2px;
    }
`;