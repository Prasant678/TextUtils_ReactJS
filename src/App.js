import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#010b22"
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled","success");
    }
  }
  return (
    <div>
      <Router>
      <Navbar title="TextModifier" About="About Text" Dropdown= "Style" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textform showAlert={showAlert} title="ENTER TEXT TO STYLE" mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}
