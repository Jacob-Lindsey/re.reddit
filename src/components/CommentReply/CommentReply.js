import { useState } from "react";
import { increment } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { Wrapper, CurrentUserTitle, CommentTextArea, ButtonWrapper, SaveButton, CancelButton } from "./style";


const CommentReply = (props) => {

    const [text, setText] = useState('');

    const handleClick = () => {
        setText('');
        props.setCommenting(false);
    };

// POSTS A NESTED COMMENT - COMMENT ID IS UNIQUE - PARENT ID IS PASSED DOWN FROM PARENT COMMENT

    const handleSubmit = async () => {
            
        const date = new Date();
        const docId = db.collection("comments").doc().id;
        
        await db.collection("posts").doc(props.postId).update({
            comments: increment(1)
        });
        await db.collection("comments").doc(docId).set({
            commentId: docId,
            createdAt: date.toUTCString(),
            createdBy: auth.currentUser.email,
            downVotesCount: 0,
            parentId: props.parentId,
            postId: props.postId,
            text: text,
            updateAt: date.toUTCString(),
            upVotesCount: 0
        });
    };

    return (
        
        <Wrapper commenting={props.commenting}>
            <CurrentUserTitle>speaking as <span>user</span></CurrentUserTitle>
            <CommentTextArea 
                rows="1"
                cols="1"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
            />
            <ButtonWrapper>
                <SaveButton onClick={handleSubmit}>save</SaveButton>
                <CancelButton onClick={handleClick}>cancel</CancelButton>
            </ButtonWrapper>
            
        </Wrapper>

    )

}

export default CommentReply;