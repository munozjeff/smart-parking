import React, { useState } from 'react';
import './style.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, login} from '../components/firebase/firebase';
import "firebase/firestore";


const LoginUser = ()=>{   
    const [sesion,setSesion] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handlerOnChangueEmail=()=>{
        const email = event.target.value
        setEmail(email)
    }
    const handlerOnChanguePassword=()=>{
        const password = event.target.value
        setPassword(password)
    }
    const hanlderLogIn= async ()=>{
        const dataLogin = {
            email: email,
            password: password
        }
        const result = await login(dataLogin);
        setSesion(result.sesion)
        console.log(result.sesion);
    }
    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg' type='email' placeholder="Email" onChange={handlerOnChangueEmail}/>
            <input className='input-inputDsg' type='password' placeholder='Password' onChange={handlerOnChanguePassword}/>
            <a className='a-form-user' href='#'>¡Registrate Aqui!</a>
            <button className='btn-ButtonDsg' onClick={hanlderLogIn}>LogIn</button>
        </div>
    )
}
 

export {LoginUser}