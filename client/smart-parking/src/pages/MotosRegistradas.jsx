import React, { useState, useEffect } from "react";
import './MotosRegistradas.css'
import {getFirestore,collection,getDocs, QuerySnapshot} from "firebase/firestore";
import QRCode from 'qrcode.react';
import {getAuth, onAuthStateChanged } from "firebase/auth";

const MotosRegistradas = ()=>{
    const [motos, setMotos] = useState([]);
    const [selectedMoto, setSelectedMoto] = useState(null);
    const [user, setUser] = useState([]);
    const [dataUser, setDataUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    // useEffect(()=>{
    //     const motosDB = getFirestore();
    //     const queryCollection = collection(motosDB,'motos');

    //     getDocs(queryCollection)
    //     .then((QuerySnapshot)=>{
    //         const datosMotos =[];
    //         QuerySnapshot.forEach((doc)=>{
    //             const datos = doc.data();
    //             datosMotos.push(datos);
    //         });
    //         setMotos(datosMotos);
    //         console.log(datosMotos);
    //     })
    // },[])

    // useEffect(() => {
    //     const auth = getAuth();
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         setCurrentUser(user);
    //       } else {
    //         setCurrentUser(null);
    //       }
    //     });
    
    //     return () => {
    //       unsubscribe();
    //     };
    //   }, []);

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
                            <th>Usuario</th>
                            <th>QR</th>
                        </tr>
                    </thead>

                    <tbody>
                        {motos.map((moto, index) => {
                            const motoWithUser = { ...moto, user: currentUser ? currentUser.email : '' };

                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={moto.motoImage} alt="MotoImg" width="50" height="50" />
                                    </td>
                                    <td>{moto.placa}</td>
                                    <td>{motoWithUser.user}</td>
                                    <td><button className="QR-button" onClick={() => setSelectedMoto(motoWithUser)}>Generar QR</button></td>
                                </tr>
                            );
                        })}
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
    );
}

export {MotosRegistradas};
