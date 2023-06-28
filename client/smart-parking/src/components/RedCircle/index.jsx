import React from "react";
import './RedCircle.css'


function RedCircle(props){
    return(
        <div className="circle-red-container">
            <div className="circle-text">
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}

export {RedCircle}