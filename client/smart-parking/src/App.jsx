import { useState } from 'react'
import { LoginUser } from './pages/LoginUser'
import { LogUpUser } from './pages/logUpUser'
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <LogUpUser></LogUpUser> */}
      <Routes>
        <Route path="/" exact element={<LoginUser/>}/>
        <Route path="login" element={<LoginUser/>} />
        <Route path="logup" element={<LogUpUser/>} />
          
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
