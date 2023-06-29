import React, { useEffect, useState, useContext } from 'react';
import './style.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {login, loadData} from '../components/firebase/firebase';
import "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthContext';


const LoginUser = ()=>{   
    const [sesion,setSesion] = useState(null)
    // const [dataUser,setDataUser] = useState(null)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { logIn, dataUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const handlerOnChangueEmail=()=>{
        const email = event.target.value
        setEmail(email)
    }
    const handlerOnChanguePassword=()=>{
        const password = event.target.value
        setPassword(password)
    }
    const hanlderLogIn= async ()=>{
        const result = await logIn(email, password);
        setSesion(result)
    }
    useEffect(()=>{
        const auth=getAuth()
        auth.signOut()
    },[])

    // useEffect(()=>{
    //     if(sesion != null){
    //         async function load(uid){
    //                 const load = await loadData(uid)
    //                 setDataUser(load)
    //         }
    //         load(sesion.uid)
    //         setDataUser(load(sesion.uid))
    //     }
    // },[sesion])

    useEffect(()=>{
        if(dataUser){
            if(dataUser.rol === "motociclista"){
                navigate("/motociclista")
            }
            else if(dataUser.rol === "vigilante"){
                navigate("/vigilante")
            }
        }
    },[dataUser])

    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg' type='email' placeholder="Email" onChange={handlerOnChangueEmail}/>
            <input className='input-inputDsg' type='password' placeholder='Password' onChange={handlerOnChanguePassword}/>
            <Link to="/logup">¡Registrate Aqui!</Link>
            <button className='btn-ButtonDsg' onClick={hanlderLogIn}>LogIn</button>
        </div>
    )
}
 

export {LoginUser}