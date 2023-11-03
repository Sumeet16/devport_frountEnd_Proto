import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/login';
import Repositories from './components/Repositories';
import Auth from './components/auth';

function App() {
  const [count, setCount] = useState()



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Repositories/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
