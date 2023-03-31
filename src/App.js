
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './home'
import Square from './square'

function App() {
  const [randomHex, setRandomHex] = useState(null);

  const navigate = useNavigate();

  const newRandomHex = () => {
    const hex = Math.floor(Math.random() * 16**16).toString(16);
    setRandomHex(hex.padStart(16, '0'));
  }

  useEffect(() => {
    if (randomHex) {
      navigate(`/square/${randomHex}`);
    }
  }, [randomHex, navigate]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home onButtonClick={newRandomHex}/>} />
        <Route exact path="/square/:randomHex" element={<Square roomNumber={randomHex}/>} />
      </Routes>
    </div>
  );
}

export default App;
