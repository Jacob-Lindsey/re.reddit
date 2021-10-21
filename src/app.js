import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { db } from "./lib/firebase";
import ROUTES, { RenderRoutes } from "./routes";
import "./app.css";

const App = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
      });
  }, []);

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
    <div className="App">
      <Header />
      <div className="content-container">
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  )

}

export default App;
