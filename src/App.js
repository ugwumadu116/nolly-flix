import React, { useState, useEffect } from 'react';

import './App.css';
import styled from "styled-components";

// import { howItWorksData } from "./assets/data";



function App() {

  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("CSS-dev");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e)=>{
    setEmail(e.target.value);
    console.log(email , "am here");
  }
    return (
    <div className="App">
      
  
  <h1>app setup</h1>
  

   
    </div>
  );
}


export default App;
