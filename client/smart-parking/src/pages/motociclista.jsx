import React from "react";
import { WhiteCard } from "../components/WhiteCard";
import { YellowCard } from "../components/YellowCard";
import './motociclista.css'
import { YellowCircle } from "../components/YellowCircle";
import { RedCircle } from "../components/RedCircle";
import { useNavigate } from 'react-router-dom';

function Motociclista(){

    const navigate = useNavigate();


    return(
        <div className="main-container">

            <div className="text1">
                <h2>Hola, Motociclista</h2>
                <h2>¿Qué deseas hacer hoy?</h2>

            </div>
            <div className="cards-container">

                <WhiteCard
                imagen={`https://i.imgur.com/BOCDufH.png`}
                text={"Generar QR"}
                link={"/motos-registradas"}
                />

                <YellowCard
                    imagen={'https://i.imgur.com/kC51mnv.png'}
                    text={"Moto"}
                    link={"/motos-registradas"}

                />

                <WhiteCard
                imagen={`https://i.imgur.com/snfT9Pr.png`}
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
                        link={"/registro-moto"}
                    />
                    <RedCircle
                        text="Alertar mal parqueo"
                        link="/enviar-reporte"
                    />
                </div>

            </div>
        </div>

    )

}

export {Motociclista}