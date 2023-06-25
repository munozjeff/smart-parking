import React from 'react';
import './style.css'

const LoginUser = ()=>{
    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg' type='email' placeholder="Email"/>
            <input className='input-inputDsg' type='password' placeholder='Password'/>
            <a className='a-form-user' href='#'>¡Registrate Aqui!</a>
            <button className='btn-ButtonDsg'>LogIn</button>
        </div>
    )
}
export {LoginUser}