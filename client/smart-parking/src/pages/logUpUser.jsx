import React, { useEffect, useState } from 'react';
import { write, logup} from '../components/firebase/firebase';

const LogUpUser=()=>{
    const [user,setUser]=useState(null)
    const [inputUserName, setInputUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sesion, setSesion] = useState('');
    
    // Add a new document in collection "cities"
    
    const handlerOnChangueEmail=()=>{
        const email = event.target.value
        setEmail(email)
    }
    const handlerOnChanguePassword=()=>{
        const password = event.target.value
        setPassword(password)
    }

    const handleInputUserName=()=>{
        const userName = event.target.value
        setInputUserName(userName);
    }

    // const write = async (user)=>await setDoc(doc(db, "users", user.uid), {
    //     email: user.email,
    //     userName: inputUserName,
    //     data: {}
    // });

    useEffect(()=>{
        if(user){
            const dataUser={
                uid:user.uid,
                email:user.email,
                userName:inputUserName,
                data: {}
            }
            write(dataUser)
        }
        
    },[user])

    const handleLogUp=async()=>{
        // const auth = getAuth(app);
        const sesionData = {
            email: email,
            password: password
        }
        const user = await logup(sesionData)
        setUser(user)
    }

    return(
        <div className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Inicia sesión para usar nuestros servicios</p>
            <input className='input-inputDsg email' type='email' placeholder="Email" onChange={handlerOnChangueEmail}/>
            <input className='input-inputDsg user' type='user' placeholder="User" onChange={handleInputUserName}/>
            <input className='input-inputDsg password' type='password' placeholder='Password' onChange={handlerOnChanguePassword}/>
            <input className='input-inputDsg veryfi-password' type='password' placeholder='Password'/>
            <button className='btn-ButtonDsg' onClick={handleLogUp}>LogUp</button>
        </div>
    )
}
export{LogUpUser}