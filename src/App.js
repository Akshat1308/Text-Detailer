// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// let name = "akshat";
function App() {
const [mode, setMode] = useState('light')
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#413F42";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor="white";
  }
}
  return (
    <>
      <Navbar title="Text Detailer" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3" >  <TextForm heading="Enter your text below" mode={mode}/></div>

    </>
  );
}

export default App;
