import React from "react";
import './YellowCircle.css'
import { useNavigate } from 'react-router-dom';


function YellowCircle(props){
        
    const navigate = useNavigate()
    const handlerOnClick=()=>{
        navigate(props.link)
        console.log(props.link);
    }
    return(
        <div onClick={handlerOnClick}  className={`circle-yellow-container ${props.enable ?'circle-enable':'circle-disable'}`}>
            <div className="circle-text">
                <h2>{props.text}</h2>
            </div>

        </div>
    )
}

export {YellowCircle}