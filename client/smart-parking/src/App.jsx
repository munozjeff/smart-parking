import { useState } from 'react'
import { LoginUser } from './pages/LoginUser'
import { LogUpUser } from './pages/logUpUser'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Motociclista } from './pages/motociclista';
import { RegistrarMotocicleta } from './pages/RegistrarMotocicleta';
import { Vigilante } from './pages/vigilante';
import { QrScan } from './components/qrCodeReader/qrCodeReader';
import { MotosRegistradas } from './pages/MotosRegistradas';

function App() {
  return (
    <>
      {/* <LogUpUser></LogUpUser> */}
      <Routes>
        <Route path="/" exact element={<LoginUser/>}/>
        <Route path="login" element={<LoginUser/>} />
          <Route path="logup" element={<LogUpUser/>} />
          <Route path="motociclista" element={<Motociclista/>}/>
          <Route path="vigilante" element={<Vigilante/>}/>
          <Route path="registro-moto" element={<RegistrarMotocicleta/>}/>
          <Route path="qr-reader" element={<QrScan/>}/>
          <Route path='motos-registradas' element={<MotosRegistradas/>}/>
          
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  )
}

export default App
