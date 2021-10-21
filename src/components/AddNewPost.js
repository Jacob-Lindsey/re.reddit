import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../lib/firebase";

const AddNewPost = () => {

    const [title, setTitle] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const history = useHistory();

    const tempUser = "Pantzzzzless";
    const tempSubreddit = "RocketLeague";

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("posts").add({
            comments: [],
            createdAt: date.toUTCString(),
            createdBy: tempUser,
            downVotesCount: 0,
            subreddit: tempSubreddit,
            title,
            updateAt: date.toUTCString(),
            upVotesCount: 0,
        }).then(
            history.push("/")
        );

        setTitle("");
    };

    return (
        <>
            <button onClick={handleSubmit}>Add new post</button>
            <div>
                <label>Post title</label>
                <textarea
                    type="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

        </>
    )

}

export default AddNewPost;