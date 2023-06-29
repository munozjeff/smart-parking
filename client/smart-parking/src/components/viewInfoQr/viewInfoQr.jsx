import React from 'react';
import "./style.css"


function ViewInfoQr({data}){
    return(
        <div id='viewInfoQrContainer'>
            <div className='infoItem'>
                <span>Propietario</span>
                <span>{data ? data.user : ""}</span>
            </div>
            <div className='infoItem'>
                <span>Placa</span>
                <span>{data ? data.placa : ""}</span>
            </div>
        </div>
    )
}

export {ViewInfoQr}