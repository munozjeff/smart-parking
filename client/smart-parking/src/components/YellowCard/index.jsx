import React from "react";
import './YellowCard.css'
import { useNavigate } from 'react-router-dom';


function YellowCard(props){
    
    const navigate = useNavigate()
    const handlerOnClick=()=>{
        navigate(props.link)
        console.log(props.link);
    }
    return(
        
        <div onClick={handlerOnClick} className="card-container-yellow">
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