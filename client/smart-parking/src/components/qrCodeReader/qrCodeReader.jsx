// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from 'react-router-dom';
import { ViewInfoQr } from "../viewInfoQr/viewInfoQr";
import { YellowCircle } from "../YellowCircle";

const QrScan = () => {
  const [scanResult,setScanResult] = useState(null)
  const [scanner,setScanner] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("se ejecuta");
    setScanner(new Html5QrcodeScanner('reader',{qrbox:400,fps:5}))
  },[])

  useEffect(()=>{
    if(scanner){
      scanner.render(success, error)
      function success(result){
        scanner.clear
        setScanResult(result)
      }
      function error(err){
        // console.warn(err)
        // scanner.clear()
      }
    }
    return () => {
      if (scanner) {
          scanner.clear()
          // scanner.stop()
      }
    }
  },[scanner])
  useEffect(() => {
    if (scanResult) {
      navigate("/vigilante")
    }
  }, [scanResult, navigate])
  return(
    <>
      {/* <h1>QR SCANER</h1> */}
      {/* {scanResult 
      ? navigate("/vigilante")
      //: <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}><div style={{backgroundColor:"white"}}><div id="reader" style={{width:"70vw",height:"70vw"}}></div></div></div>
        :<div id="reader" style={{width:"70vw",height:"70vw"}}></div>
      } */}
      <div id="reader" style={{width:"70vw",height:"70vw",margin:"auto"}}></div>
      <ViewInfoQr/>
      <div className="servicios">
                <div className="cards-container">
                  <YellowCircle
                      text="Permitir acceso"
                      enable={false}
                  />
                    <YellowCircle
                        text="Permitir salida"
                        enable={true}
                    />
                </div>
      </div>
    </>
  )
};


export {QrScan};