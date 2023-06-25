import React from 'react';


const LogUpUser=()=>{
    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg email' type='email' placeholder="Email"/>
            <input className='input-inputDsg user' type='user' placeholder="User"/>
            <input className='input-inputDsg password' type='password' placeholder='Password'/>
            <input className='input-inputDsg veryfi-password' type='password' placeholder='Password'/>
            <button className='btn-ButtonDsg'>LogUp</button>
        </div>
    )
}
export{LogUpUser}