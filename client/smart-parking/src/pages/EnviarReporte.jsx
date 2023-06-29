import React, { useEffect, useState } from 'react';
import './style.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, login, loadData} from '../components/firebase/firebase';
import "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { writeReport} from '../components/firebase/firebase';


const EnviarReporte = ()=>{   

    const [Fecha, setFecha] = useState('');
    const [Imagen, setImagen] = useState('');
    const [Reporte, setReporte] = useState({});
    // const handlerOnChangueDate =()=>{
    //     const Fecha =event.target.value;
    //     setFecha(Fecha);

    // }

        
    // const handlerOnChangueImage =()=>{
    //     const Imagen = event.target.value;
    //     setImagen(Imagen);

    // }

    const handlerReportData =()=>{
        const {name,value}=event.target;
        setReporte({...Reporte,[name]:value})
    }

    const hanlderReport =async()=>{
        event.preventDefault();
        const currentDate = new Date();
        const report = {
            ...Reporte,
            fecha: currentDate, // Asignar directamente el valor convertido a entero
        };
        console.log(report);
        const enviarReporte = await writeReport(report, "sdasdd");
    }

    return(
        <form onSubmit={hanlderReport} className='form-user'>
            <h1 className='h1-form-user'>PARQUEADERO INTELIGENTE</h1>
            <p className='p-form-user'>Envía reporte de mal estacionamiento</p>
            {/* <label htmlFor='fecha' >Ingrese Fecha</label>
            <input className='input-inputDsg' name='fecha' value={Reporte.Fecha || ""} type='datetime-local' placeholder="Fecha" onChange={handlerReportData}/> */}
            <label htmlFor='imageMoto'  >Adjunte Imagen</label>
            <input className='input-inputDsg' name='imageMoto' value={Reporte.Imagen || ""} type='file' placeholder='Imagen' onChange={handlerReportData}/>
            <button className='btn-ButtonDsg' type='submit' onClick={hanlderReport}>Enviar Reporte</button>
        </form>
    )
}
 

export {EnviarReporte}