import React from "react";
import './YellowCircle.css'


function YellowCircle(props){

    return(
        <div className="circle-yellow-container">
            <div className="circle-text">
                <h2>{props.text}</h2>
            </div>

        </div>
    )
}

export {YellowCircle}