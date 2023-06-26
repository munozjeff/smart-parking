import React from "react";
import './YellowCard.css'


function YellowCard(props){
    return(

        <div className="card-container-yellow">
            <figure className="img-container">
                <img src={props.imagen} alt="Card"/>
            </figure>
            <div className="text-container">
                <h3>{props.text}</h3>
            </div>


        </div>

    )
}

export {YellowCard}