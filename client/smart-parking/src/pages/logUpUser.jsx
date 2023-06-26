import React, { useEffect, useState } from 'react';
import { app } from '../components/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const LogUpUser=()=>{
    const [user,setUser]=useState(null)

    useEffect(()=>{
        console.log(user);
    },[user])

    const handleLogUp=async()=>{
        const auth = getAuth(app);
        
        console.log("sesion");
        await createUserWithEmailAndPassword(auth, "jeffersonsteven23@gmail.com", "password")
        .then((userCredential) => {
            //Signed in 
            const user = userCredential.user;
            alert("Registro exitoso")
            //...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //..
        });
    }

    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg email' type='email' placeholder="Email"/>
            <input className='input-inputDsg user' type='user' placeholder="User"/>
            <input className='input-inputDsg password' type='password' placeholder='Password'/>
            <input className='input-inputDsg veryfi-password' type='password' placeholder='Password'/>
            <button className='btn-ButtonDsg' onClick={handleLogUp}>LogUp</button>
        </div>
    )
}
export{LogUpUser}