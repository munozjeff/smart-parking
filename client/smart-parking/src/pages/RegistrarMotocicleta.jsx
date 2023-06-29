import React, {useState} from "react";
import './RegistrarMotocicleta.css'
import "firebase/firestore";
import { writeMoto } from "../components/firebase/firebase";
// import {MyComponent} from '../components/QR/GenerarQR';


function RegistrarMotocicleta(){


    const [form,setForm] = useState({});
    const [showQR, setShowQR] = useState(false);


    const handlerFormData=()=>{
        const {name,value}=event.target;
        setForm({...form,[name]:value})
    }
    const handlerSendData= async()=>{
        event.preventDefault()
        const moto = form;
        const registrarMoto = await writeMoto(moto);
        setShowQR(true);
    }
    
    return(
        
        <div className="form-container">
            <div className="form-titles">
                <h1>Parqueadero Inteligente</h1>
                <h2>Registra tu motocicleta</h2>
            </div>
            
            
            <form onSubmit={handlerSendData} className="form-registro-moto">

                <input id="placa" value={form.placa || ""} name="placa" className="inputs" type="text" placeholder="Ingresa Placa" onChange={handlerFormData}></input>
                <input id="tarjeta" value={form.tarjeta || ""} name="tarjeta" className="inputs" type="file" placeholder="Tarjeta de Propiedad" alt="imagen" onChange={handlerFormData}></input>
                <input src="./src/assets/files.png" id="motoImage" value={form.motoImage || ""} name="motoImage" className="inputs" type="file" placeholder="Imagen de la moto" alt="imagen" onChange={handlerFormData}></input>
                <input id="emailRegister"  value={form.emailRegister || ""} name="emailRegister" className="inputs" type="text" placeholder="Verificar email" onChange={handlerFormData}></input>

                
                <button id="btn-submit" type="submit"> Registar Motocicleta</button>


            </form>
            {/* {showQR && <MyComponent data={form} />} */}
        </div>
        

    )
}

export {RegistrarMotocicleta}