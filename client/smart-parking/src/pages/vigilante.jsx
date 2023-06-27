import React from "react";
import { WhiteCard } from "../components/WhiteCard";
import { YellowCard } from "../components/YellowCard";
import { YellowCircle } from "../components/YellowCircle";
import { RedCircle } from "../components/RedCircle";

function Vigilante(){
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