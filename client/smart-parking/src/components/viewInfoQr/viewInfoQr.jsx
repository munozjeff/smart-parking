import React from 'react';
import "./style.css"


function ViewInfoQr(){
    return(
        <div id='viewInfoQrContainer'>
            <div className='infoItem'>
                <span>Propietario</span>
                <span>name</span>
            </div>
            <div className='infoItem'>
                <span>Placa</span>
                <span>name</span>
            </div>
        </div>
    )
}

export {ViewInfoQr}