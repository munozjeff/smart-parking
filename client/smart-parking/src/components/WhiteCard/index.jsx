import React from "react";
import './WhiteCard.css'


function WhiteCard(props){
    return(

        <div className="card-container">
            <figure className="img-container">
                <img src={props.imagen} alt="Card"/>
            </figure>
            <div className="text-container">
                <h3>{props.text}</h3>
            </div>


        </div>

    )
}

export {WhiteCard}