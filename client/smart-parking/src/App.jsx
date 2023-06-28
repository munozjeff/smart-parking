import { useState, useEffect, createContext } from 'react'
import { LoginUser } from './pages/LoginUser'
import { LogUpUser } from './pages/logUpUser'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Motociclista } from './pages/motociclista';
import { RegistrarMotocicleta } from './pages/RegistrarMotocicleta';
import { Vigilante } from './pages/vigilante';
import { QrScanner } from './pages/qrScanner';
import { MotosRegistradas } from './pages/MotosRegistradas';
import { EnviarReporte } from './pages/EnviarReporte';
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence, onAuthStateChanged  } from 'firebase/auth';
import { AuthProvider } from './components/AuthProvider/AuthContext';

function App() {
  
  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/" exact element={<LoginUser/>}/>
        <Route path="login" element={<LoginUser/>} />
          <Route path="logup" element={<LogUpUser/>} />
          <Route path="motociclista" element={<Motociclista/>}/>
          <Route path="vigilante" element={<Vigilante/>}/>
          <Route path="registro-moto" element={<RegistrarMotocicleta/>}/>
          <Route path="qrScanner" element={<QrScanner/>}/>
          <Route path='motos-registradas' element={<MotosRegistradas/>}/>
          <Route path='enviar-reporte' element={<EnviarReporte/>}/>
          
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      </AuthProvider>
      
    </>
  )
}

export default App
