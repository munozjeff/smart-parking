import React from 'react';
import { initializeApp } from "firebase/app";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_zWbgykQZFZgwO5yTD_X5BZgpUvWexVU",
    authDomain: "parqueadero-inteligente-ccb7a.firebaseapp.com",
    projectId: "parqueadero-inteligente-ccb7a",
    storageBucket: "parqueadero-inteligente-ccb7a.appspot.com",
    messagingSenderId: "890350577688",
    appId: "1:890350577688:web:14336be3a744c27cb9bb6d",
    measurementId: "G-0MNET3HD2L"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app)
const write = async (user)=>await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    userName: user.userName,
    data: user.data,
    rol: "motociclista"
});

const writeMoto = async (moto)=>await setDoc(doc(db, "motos", moto.placa), {
    placa: moto.placa,
    tarjeta: moto.tarjeta,
    motoImage: moto.motoImage,
});

const writeReport = async (report)=> await setDoc(doc(db,"reportes",report.Imagen),{
    Fecha: report.Fecha,
    Imagen: report.Imagen,
})


const loadData= async(userUID)=>{
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
    // docSnap.data() will be undefined in this case
        return null
    }
}

// const loadMotos = async(placa)=>{
//     const docRef = doc(db,"motos", placa);
//     const docSnap = await getDoc(docRef);
//     if(docSnap.exists()){
//         return docSnap.data()

//     }else{
//         return null
//     }
// }

const login =(dataLogin)=> signInWithEmailAndPassword(auth, dataLogin.email, dataLogin.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const result={
            sesion: true,
            uid: user.uid,
            rol: user.rol,
            massage: "Se inicio sesión"
        }
        return result
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const result={
            sesion: false,
            email: "",
            massage: errorMessage
        }
        return result
    });
const logup = (dataLogin)=>createUserWithEmailAndPassword(auth, dataLogin.email,dataLogin.password)
.then((userCredential) => {
    //Signed in 
    const user = userCredential.user;
    return user
    //...
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    return false
    //..
});




// const motosRegistradas = ()=>mostrarMotos(){
//     useEffect(()=>{

//         const coleccionMotos = firebase.firestore().collection('motos');
//         coleccionMotos.get().then((querySnapshot)=>{
//             const datosMotos = [];
//             querySnapshot.forEach((doc)=>{
//                 const datos = doc.data();
//                 datosMotos.push(datos);
//             });
//             setMotos(datosMotos);
//         });
//     },[]    );
// }



export {app,write,login,logup,writeMoto,loadData,writeReport};
