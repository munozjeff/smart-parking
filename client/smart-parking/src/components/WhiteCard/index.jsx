import React from "react";
import './WhiteCard.css'
import { useNavigate} from "react-router-dom";

function WhiteCard(props){
    const navigate = useNavigate()
    const handlerOnClick=()=>{
        navigate(props.link)
        console.log(props.link);
    }
    return(

        <div className="card-container-white" onClick={handlerOnClick}>
            <figure className="img-container">
                <img src={props.imagen} className="card-image" alt="Card"/>
            </figure>
            <div className="text-container">
                <h3>{props.text}</h3>
            </div>


        </div>

    )
}

export {WhiteCard}