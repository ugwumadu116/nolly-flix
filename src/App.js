import React, { useState, useEffect } from 'react';

import './App.css';
import styled from "styled-components";




function App() {

  const [movies, setMovies] = useState([
    {
      id:1,
      name:"The Redemption ",
      like:1,
      price:100
    },
    {
      id:2,
      name:"Africa’s Tech Roots ",
      like:1,
      price:100
    },
    {
      id:3,
      name:"The Invisible Man ",
      like:1,
      price:100
    },
    {
      id:4,
      name:"The Complicated Project",
      like:1,
      price:100
    },
    {
      id:5,
      name:"Simply Javascript ",
      like:1,
      price:100
    },
    {
      id:6,
      name:"The New Web ",
      like:1,
      price:100
    },
   
  ]);


    return (
    <div className="App">
    
    <h1> Nolly-Flix</h1>
  

   
    </div>
  );
}


export default App;
