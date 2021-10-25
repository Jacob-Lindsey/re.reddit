import { useEffect, useRef, useState } from "react";
import { app, auth, db } from "../../lib/firebase";
import { NewCommentWrapper, SubmitButton, CommentTextBox, Wrapper,
         Comment, CommentTop, Author, Karma, TimePosted, Controls, PostContent,
         PostTitle, PostAuthor, Divider
       } from "./style";


const PostDetail = (post) => {

    const [text, setText] = useState('');
    const [getComments, setGetComments] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const authorRef = useRef(null);
    const titleRef = useRef(null);
    const postRef = useRef(null);
    
    const postId = post.location.state.post.id;
    
    useEffect(() => {

        const dbRef = db.collection("posts").doc(postId).get();

        dbRef.then(function(doc) {
            if (doc.exists) {
                authorRef.current = doc.data().createdBy;
                titleRef.current = doc.data().title;
                postRef.current = doc.data().textContent; 
                setGetComments(doc.data().comments);
                setLoaded(true);
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document: ", error);
        });
    }, []);

    const handleSubmit = async () => {
        const date = new Date();
        const newComment = {
            comments: [],
            createdAt: date.toUTCString(),
            createdBy: auth.currentUser.email,
            downVotesCount: 0,
            text: text,
            updateAt: date.toUTCString(),
            upVotesCount: 0
        }
        await db.collection("posts").doc(postId).update({
            comments: app.firestore.FieldValue.arrayUnion(newComment)
        });
        await db.collection("posts").doc(postId).update({
            updateAt: date.toUTCString()
        });
        setText("");
        window.location.reload();
    };

    return (
        <>
            <PostTitle>{titleRef.current}</PostTitle>
            <PostAuthor>{authorRef.current}</PostAuthor>
            <PostContent>
                {postRef.current}
            </PostContent>
            <Divider />
            <NewCommentWrapper>
                <CommentTextBox
                    type="post-title"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <SubmitButton onClick={handleSubmit}>save</SubmitButton>
            </NewCommentWrapper>
            <Wrapper>

                    {loaded ? getComments.map((comment, i) => {
                        return (
                            <Comment>
                                <CommentTop>
                                    <Author>{comment.createdBy}</Author>
                                    <Karma>{comment.upVotesCount - comment.downVotesCount} points</Karma>
                                    <TimePosted>{comment.createdAt}</TimePosted>
                                </CommentTop>
                                <div key={i}> {comment.text} </div>
                            </Comment>
                        )
                    })
                    : 
                            <div> DATA LOADING </div>       
                    }

                
            </Wrapper>
        </>
    )

}

export default PostDetail;