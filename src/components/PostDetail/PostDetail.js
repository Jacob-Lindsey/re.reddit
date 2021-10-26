import { useEffect, useRef, useState } from "react";
import { increment } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import Comment from "../Comment/Comment";
import { NewCommentWrapper, SubmitButton, CommentTextBox, Wrapper,
         PostContent, PostTitle, PostAuthor, Divider
       } from "./style";


const PostDetail = (post) => {

    const [text, setText] = useState('');
    const [getComments, setGetComments] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const authorRef = useRef(null);
    const titleRef = useRef(null);
    const postRef = useRef(null);
    const docIdRef = useRef(null);
    
    const postId = post.location.state.post.id;

    useEffect(() => {

        const dbRef = db.collection("comments").get();

        db.collection("comments")
            .orderBy("createdAt", "desc")
            .onSnapshot((querySnapshot) => {

                const _comments = [];

                querySnapshot.forEach((doc) => {
                    authorRef.current = post.location.state.post.createdBy;
                    titleRef.current = post.location.state.post.title;
                    postRef.current = post.location.state.post.textContent;

                    if (doc.data().postId === postId) {
                        _comments.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    }
            });
            setGetComments(_comments);
            setLoaded(true);
        });        
    }, []);

    // POSTS A TOP LEVEL COMMENT - COMMENT ID === DOC ID - PARENT ID IS NULL

    const handleSubmit = async () => {

        if (text !== '') {
            const date = new Date();
            const docId = db.collection("comments").doc().id;

            await db.collection("posts").doc(postId).update({
                comments: increment(1)
            });

            await db.collection("comments").doc(docId).set({
                commentId: docId,
                createdAt: date.toUTCString(),
                createdBy: auth.currentUser.email,
                downVotesCount: 0,
                parentId: null,
                postId: postId,
                text: text,
                updateAt: date.toUTCString(),
                upVotesCount: 0
            });

            setText("");
        }
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
                    {loaded && getComments ? getComments.map((comment, i) => {
                        return (
                            <Comment comment={comment} postId={postId} />
                        )
                    })
                    : 
                            <div> DATA LOADING </div>       
                    }s
            </Wrapper>
        </>
    )

}

export default PostDetail;