import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import Post from "../Post/Post";
import SidePanel from "../SidePanel/SidePanel";
 
const Home = ({ routes }) => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);

  return (
    <>
        <SidePanel />
        {posts.map((post) => (
            <Post post={post} key={post.id} />
        ))}
    </>
  )

}

export default Home;