import React, { useState, useEffect } from 'react';

import './App.css';
import styled from "styled-components";




function App() {

  const [movies, setMovies] = useState([
    {
      id:1,
      name:"The Redemption ",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579243332l/50166116._SY475_.jpg",
      like:1,
      price:100
    },
    {
      id:2,
      name:"Africa’s Tech Roots",
      img:"https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2018/09/africa-digital-technology.png?resize=347%2C347&ssl=1",
      like:1,
      price:100
    },
    {
      id:3,
      name:"The Invisible Man ",
      img:"https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
      like:1,
      price:100
    },
    {
      id:4,
      name:"The Complicated Project",
      img:"https://thumbs.dreamstime.com/z/difficult-project-businessman-works-laptop-46656781.jpg",
      like:1,
      price:100
    },
    {
      id:5,
      name:"Simply Javascript ",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388830159l/1380411.jpg",
      like:1,
      price:100
    },
    {
      id:6,
      name:"The New Web ",
      img:"https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg",
      like:1,
      price:100
    },
   
  ]);


    return (
    <div className="App">
    
    <MoviesHero>
      <div className='overlay'>
      </div>
      <div className='hero-info'>
        <div className='cat'>
          <span>Science Fiction</span>
        </div>

    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.61352L8.95839 6.36519L9.1337 6.8685H9.66666H12.5206L10.3106 8.62805L9.91739 8.94114L10.0575 9.42385L10.8685 12.2179L8.41984 10.5637L8 10.2801L7.58015 10.5637L5.13154 12.2179L5.94249 9.42385L6.0826 8.94114L5.68937 8.62805L3.47941 6.8685H6.33333H6.86629L7.0416 6.36519L8 3.61352Z" fill="white" stroke="white" stroke-width="1.5"/>
<path d="M24 3.61352L24.9584 6.36519L25.1337 6.8685H25.6667H28.5206L26.3106 8.62805L25.9174 8.94114L26.0575 9.42385L26.8685 12.2179L24.4198 10.5637L24 10.2801L23.5802 10.5637L21.1315 12.2179L21.9425 9.42385L22.0826 8.94114L21.6894 8.62805L19.4794 6.8685H22.3333H22.8663L23.0416 6.36519L24 3.61352Z" fill="white" stroke="white" stroke-width="1.5"/>
<path d="M40 3.61352L40.9584 6.36519L41.1337 6.8685H41.6667H44.5206L42.3106 8.62805L41.9174 8.94114L42.0575 9.42385L42.8685 12.2179L40.4198 10.5637L40 10.2801L39.5802 10.5637L37.1315 12.2179L37.9425 9.42385L38.0826 8.94114L37.6894 8.62805L35.4794 6.8685H38.3333H38.8663L39.0416 6.36519L40 3.61352Z" fill="white" stroke="white" stroke-width="1.5"/>
<path d="M56 3.61352L56.9584 6.36519L57.1337 6.8685H57.6667H60.5206L58.3106 8.62805L57.9174 8.94114L58.0575 9.42385L58.8685 12.2179L56.4198 10.5637L56 10.2801L55.5802 10.5637L53.1315 12.2179L53.9425 9.42385L54.0826 8.94114L53.6894 8.62805L51.4794 6.8685H54.3333H54.8663L55.0416 6.36519L56 3.61352Z" fill="white" stroke="white" stroke-width="1.5"/>
<path d="M72 3.61352L72.9584 6.36519L73.1337 6.8685H73.6667H76.5206L74.3106 8.62805L73.9174 8.94114L74.0575 9.42385L74.8685 12.2179L72.4198 10.5637L72 10.2801L71.5802 10.5637L69.1315 12.2179L69.9425 9.42385L70.0826 8.94114L69.6894 8.62805L67.4794 6.8685H70.3333H70.8663L71.0416 6.36519L72 3.61352Z" fill="white" stroke="white" stroke-width="1.5"/>
</svg>

<h3 className='heading'>Godzilla vs. Kong</h3>
<p className='hero-m-info'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make
</p>


<button className='hero-watch'>
  Watch now
</button>


      </div>

    </MoviesHero>


  

   
    </div>
  );
}

const MoviesHero = styled.div`
background-image: url("https://m.media-amazon.com/images/M/MV5BZWVjMmY4ODUtMmYzMC00NDdjLWE4MjMtOWUzMDBlNzczOGMwXkEyXkFqcGdeQWpnYW1i._V1_.jpg");
background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
position: relative;


height:648px;
width:100%;
.overlay{
  width: 100% ;
background: linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%);
height:648px; 
position: absolute;
}
.hero-info{
  top: 164px;
  left:236px;
  display:flex;
  position: absolute;
  align-items:flex-start;
  justify-content: flex-start;
  flex-direction:column;
  width: 100% ;
  height: 100% ;

}
.cat{
  background: rgba(29, 29, 29, 0.5);
border-radius: 0px 8px;
padding:4px 8px;
display:flex;
justify-content: center;
align-items:center;
margin-bottom:16px;
span{
  font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #0FEFFD;
}
}
.heading{
  font-weight: 500;
font-size: 56px;
line-height: 64px;

color: #FFFFFF;
margin:10px 0px;
}
.hero-m-info{
  font-weight: 400;
font-size: 16px;
line-height: 32px;
text-align:left;

color: #FFFFFF;
}
.hero-watch{
  width: 200px;
height: 56px;
border: 1px solid #E10856;
box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
border-radius: 40px;
background: transparent ;

font-weight: 500;
font-size: 18px;
line-height: 24px;

text-align: center;
color: #FFFFFF;

text-shadow: 0px 40px 40px rgba(0, 0, 0, 0.12);
}

`;


export default App;
