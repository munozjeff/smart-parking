import React, {useContext}from "react";
import { WhiteCard } from "../components/WhiteCard";
import { YellowCircle } from "../components/YellowCircle";
import { RedCircle } from "../components/RedCircle";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../components/AuthProvider/AuthContext"; 


function Vigilante(){
    const { currentUser } = useContext(AuthContext);
    if (currentUser){
        //console.log(currentUser);
    }
    const navigate = useNavigate()
    return(
        <div className="main-container">

            <div className="text1">
                <h2>Hola, Vigilante</h2>
                <h2>¿Qué deseas hacer hoy?</h2>

            </div>
            <div className="cards-container">

                <WhiteCard
                    imagen={`./src/assets/QR.png`}
                    text={"Scan QR"}
                    link="/qrScanner"
                />
                <WhiteCard
                    imagen={`./src/assets/QuestionMark.png`}
                    text={"Espacios disponibles"}
                />
            </div>
            <div className="servicios">
                <div className="cards-container first-service">
                    <RedCircle
                        text="Alertar mal parqueo"
                        link="/enviar-reporte"
                    />
                </div>

            </div>
            <div className="servicios">
                <div className="cards-container">
                    <YellowCircle
                        text="Permitir acceso"
                    />
                    <YellowCircle
                        text="Permitir salida"
                    />
                </div>
            </div>
            <figure>
                <img src="./src/assets/moto.png" alt="" />
            </figure>
        </div>  
    )
}
export {Vigilante}