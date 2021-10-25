import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { db } from "./lib/firebase";
import { auth } from "./lib/firebase";
import ROUTES, { RenderRoutes } from "./routes";
import Login from "./components/Login/Login";
import "./app.css";

const App = () => {
  
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  let history = useHistory();  

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      
      if (userAuth) {
        const userObj = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        console.log(userAuth);
        setUser(userObj);
      } else {
        setUser(null);
      }
    })

    return unsubscribe
  }, []);

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
      <Header user={user} />
      <div className="content-container">
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  )

}

export default App;
