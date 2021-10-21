import React, { useState, useEffect, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";

export const UserContext = createContext({user: null});

const auth = getAuth();

const UserProvider = (auth, email, password) => {
    
    let username;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            username = user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    

    return username;
}

export default UserProvider;