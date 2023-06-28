import React from "react";
import './RedCircle.css'
import { useNavigate } from 'react-router-dom';


function RedCircle(props){
    const navigate = useNavigate()
    const handlerOnClick=()=>{
        navigate(props.link)
        console.log(props.link);
    }
    return(
        <div onClick={handlerOnClick} className="circle-red-container">
            <div className="circle-text">
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}

export {RedCircle}