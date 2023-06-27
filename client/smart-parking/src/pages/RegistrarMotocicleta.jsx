import React, {useState} from "react";
import './RegistrarMotocicleta.css'
import "firebase/firestore";

function RegistrarMotocicleta(){


    const [form,setForm] = useState({});

    const handlerFormData=()=>{
        const {name,value}=event.target;
        setForm({...form,[name]:value})
    }
    const handlerSendData=()=>{
      console.log(form.placa);
    }
    
    return(
        
        <div className="form-container">
            <div className="form-titles">
                <h1>Parqueadero Inteligente</h1>
                <h2>Registra tu motocicleta</h2>
            </div>
            
            
            <form onSubmit={handlerSendData} className="form-registro-moto">

                <input id="placa" value={form.placa || ""} name="placa" className="inputs" type="text" placeholder="Ingresa Placa" onChange={handlerFormData}></input>
                {/* <input id="tarjeta" value={form.tarjeta || ""} name="tarjeta" className="inputs" type="file" placeholder="Tarjeta de Propiedad" alt="imagen" onChange={handlerFormData}></input>
                <input src="./src/assets/files.png" id="motoImage" value={form.motoImage || ""} name="motoImage" className="inputs" type="file" placeholder="Imagen de la moto" alt="imagen" onChange={handlerFormData}></input> */}
                <input id="passwordRegister"  value={form.passwordRegister || ""} name="passwordRegister" className="inputs" type="password" placeholder="Verificar Contraseña" onChange={handlerFormData}></input>
                <button id="btn-submit" type="submit"> Registar Motocicleta</button>


            </form>
        </div>
        

    )
}

export {RegistrarMotocicleta}