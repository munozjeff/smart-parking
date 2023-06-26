import React from "react";
import { WhiteCard } from "../components/WhiteCard";
import { YellowCard } from "../components/YellowCard";
import './motociclista.css'
import { YellowCircle } from "../components/YellowCircle";
import { RedCircle } from "../components/RedCircle";

function Motociclista(){
    return(
        

        <div className="main-container">

            <div className="text1">
                <h2>Hola, Motociclista</h2>
                <h2>¿Qué deseas hacer hoy?</h2>

            </div>
            <div className="cards-container">

                <WhiteCard
                imagen={`./src/assets/QR.png`}
                text={"Generar QR"}
                />

                <YellowCard
                    imagen={'./src/assets/Vector.png'}
                        text={"Moto"}
                />    

                <WhiteCard
                imagen={`./src/assets/QuestionMark.png`}
                text={"Espacios disponibles"}
                />
            </div>
            <div className="sevicios">
                <div className="title">
                    <h1>Servicios</h1>
                </div>
                <div className="cards-container">
                    <YellowCircle
                        text="Añade tu moto"
                    />
                    <RedCircle
                        text="Alertar mal parqueo"
                    />
                </div>

            </div>
        </div>
        
            
        
    )

}

export {Motociclista}