import React from "react";
import { WhiteCard } from "../components/WhiteCard";
import { YellowCard } from "../components/YellowCard";

function Motociclista(){
    return(
        <>
            <WhiteCard
                imagen={"../assets/QR.png"}
                text={"Generar QR"}

        />
        <YellowCard
            imagen={"../assets/Vector.png"}
                text={"Moto"}
        />    
        </>
        
    )

}

export {Motociclista}