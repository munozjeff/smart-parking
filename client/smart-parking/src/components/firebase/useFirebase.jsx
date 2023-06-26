import React, { useState } from 'react';
import React from 'react';
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/firestore";

function useFirebase() {
    console.log(login);    
}

const login = (auth,loginData)=> signInWithEmailAndPassword(auth, "jeffersonsteven23@gmail.com", "password")
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const result={
            sesion: true,
            email: user.uid,
            massage: "Se inicio sesión"
        }
        return result
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const result={
            sesion: false,
            email: "",
            massage: errorMessage
        }
        return result
    });

