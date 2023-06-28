import React, { useState, useEffect } from "react";
import './MotosRegistradas.css'
import {getFirestore,collection,getDocs, QuerySnapshot} from "firebase/firestore";
import {app} from '../components/firebase/firebase.jsx'
import QRCode from 'qrcode.react';



const MotosRegistradas = ()=>{
    const [motos, setMotos] = useState([]);
    const [selectedMoto, setSelectedMoto] = useState(null);

    useEffect(()=>{
        const motosDB = getFirestore();
        const queryCollection = collection(motosDB,'motos');

        getDocs(queryCollection)
        .then((QuerySnapshot)=>{
            const datosMotos =[];
            QuerySnapshot.forEach((doc)=>{
                const datos = doc.data();
                datosMotos.push(datos);
            });
            setMotos(datosMotos);
            console.log(datosMotos);
        } )
        // getDocs(queryCollection)
        // .then(res => setMotos(res.docs.map(moto =>({id:moto.id, ...moto.data()})) ))
    },[])

    return(

        <>
            
            <div className="table-main-container">
                <div>
                    <h1>Motos Registradas</h1>
                </div>
                <table>
                <thead>
                    <tr>
                        <th>Imagen Moto </th>
                        <th>Placa</th>
                        <th>QR</th>

                    </tr>
                </thead>

                <tbody>
                    {motos.map((moto,index)=>(
                        <tr key={index}>
                        <td>
                            <img src={moto.motoImage} alt="MotoImg" width="50" height="50" />
                        </td>
                        <td>{moto.placa}</td>
                        <td><button className="QR-button" onClick={() => setSelectedMoto(moto)}>Generar QR</button></td>
                        </tr>
                    ))}
       

                </tbody>
                    
                </table>
            </div>
            {selectedMoto && (
            <div>
                <h2>QR Code for {selectedMoto.placa}</h2>
                <QRCode value={JSON.stringify(selectedMoto)} />
            </div>
            )}

        </>
    )

}



export {MotosRegistradas}