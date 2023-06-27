// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScan = () => {
  const [scanResult,setScanResult] = useState(null)

  useEffect(()=>{
    console.log("se ejecuta");
    const scanner = new Html5QrcodeScanner('reader',{qrbox:400,fps:5})
    scanner.render(success, error)

    function success(result){
      scanner.clear
      setScanResult(result)
    }
    function error(err){
      // console.warn(err)
      scanner.clear
    }
  },[])

  
  
  return(
    <>
      <h1>QR SCANER</h1>
      {scanResult 
      ? <div>
        {/* Success: <a href={scanResult}>{scanResult}</a> */}
      </div>
      : <div id="reader" style={{width:"300px"}}></div>
      }
      
    </>
  )
};


export {QrScan};