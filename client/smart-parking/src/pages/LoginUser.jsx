import React from 'react';
import './style.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../components/firebase/firebase';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const hanlderLogIn=()=>{
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, "jeffersonsteven23@gmail.com", "password")
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("sesion iniciada");
        const db = getFirestore(app);

        const querySnapshot = getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        });
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}


const LoginUser = ()=>{   
    
    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg' type='email' placeholder="Email"/>
            <input className='input-inputDsg' type='password' placeholder='Password'/>
            <a className='a-form-user' href='#'>¡Registrate Aqui!</a>
            <button className='btn-ButtonDsg' onClick={hanlderLogIn}>LogIn</button>
        </div>
    )
}
export {LoginUser}