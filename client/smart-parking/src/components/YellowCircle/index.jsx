import React, {useContext} from "react";
import './YellowCircle.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthContext";
import { open_close } from "../firebase/firebase";


function YellowCircle(props){
    const { dataUser } = useContext(AuthContext);
        
    const navigate = useNavigate()
    const handlerOnClick=()=>{
        if(props.link){
            navigate(props.link)
            console.log(props.link);
        }
        else if(props.value){
            if(dataUser && dataUser.rol === "vigilante"){
                const data={
                    access:props.access,
                    value:props.value,
                }
                open_close(data)
            }
        }
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