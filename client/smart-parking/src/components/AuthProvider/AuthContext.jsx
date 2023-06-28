// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_zWbgykQZFZgwO5yTD_X5BZgpUvWexVU",
    authDomain: "parqueadero-inteligente-ccb7a.firebaseapp.com",
    projectId: "parqueadero-inteligente-ccb7a",
    storageBucket: "parqueadero-inteligente-ccb7a.appspot.com",
    messagingSenderId: "890350577688",
    appId: "1:890350577688:web:14336be3a744c27cb9bb6d",
    measurementId: "G-0MNET3HD2L"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
        });

        return unsubscribe;
      })
      .catch((error) => {
        // Manejar error
      });
  }, []);

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const result={
                sesion: true,
                uid: user.uid,
                rol: user.rol,
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
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { app };