import { useEffect, useState } from "react";
import { app, db } from "../../lib/firebase";
import useFirestore from "../../lib/useFirestore";
import { doc, onSnapshot } from "firebase/firestore";

const PostDetail = (post) => {

    const [text, setText] = useState('');
    const [getComments, setGetComments] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    const postId = post.location.state.post.id;
    const commentData = [getComments];
    
    const unsub = () => {
        const comments = [];
        post.location.state.post.comments.forEach((com, i) => {
            comments.push(com);
        });
        console.log(getComments)
        return comments;
    }

    useEffect(() => {
        const loadData = async () => {
            const data = await unsub();
            setGetComments(data);
            console.log(data)
            setLoaded(true);
        };
        setTimeout(() => {
            loadData();
        }, 150);
    }, []);

    const postData = {
        comments: post.location.state.post.comments.length,
        createdAt: post.location.state.post.createdAt,
        createdBy: post.location.state.post.createdBy,
        downVotesCount: post.location.state.post.downVotesCount,
        subreddit: post.location.state.post.subreddit,
        title: post.location.state.post.title,
        upVotesCount: post.location.state.post.upVotesCount,
        updateAt: post.location.state.post.updateAt,
    };

    const handleSubmit = async () => {
        const date = new Date();
        const newComment = {
            comments: [],
            createdAt: date.toUTCString(),
            createdBy: 'Username',
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
    };

    return (
        <>
            <h1>{postData.title}</h1>
            <h2>{postData.createdBy}</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
             
                {loaded ? commentData[0].map((comment, i) => {
                    return (
                        <div key={i} style={{ color: "#ddd", fontSize: "1.4rem", fontWeight: "600" }}> {comment.text} </div>
                    )
                })
                : 
                        <div> DATA LOADING </div>       
                }

            </div>
            <button onClick={handleSubmit} style={{ width: '10%', height: '3rem', margin: '0 auto' }}>Add new comment</button>
            <div>
                <label>Post title</label>
                <textarea
                    type="post-title"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </>
    )

}

export default PostDetail;