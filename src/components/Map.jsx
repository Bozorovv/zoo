import React, { useState, useRef } from 'react'
import maap from '../image/baaaa.png'

import '../style/map.css'
import { NavLink } from 'react-router-dom'
function Map() {
let xaarita = useRef()
const[zoom, setZoom] = useState(1)
function zoomOut(){
  // xaarita.current.classList.add("zooom")
   xaarita.current.style.transform = `scale(${zoom })`
  setZoom((prev) => prev+0.1)
}
function zoomIn(){
  setZoom((prev) => prev-0.1)
    xaarita.current.style.transform = `scale(${zoom})`
}

  return (
    <div className='map'> 
      <div className="container">
       
       <div className="hh2">
       <h2>Choose your favorite Animal</h2>
       <div className="bbttn">
     
     <button  onClick={zoomOut}>✚</button>
     <button onClick={zoomIn}>﹣</button>
   </div>
       </div>
    
        <div className="map__wrapper">
         <NavLink to="/zoo">  <img ref={xaarita} src={maap} alt="" /></NavLink>
        
        </div>
     
      </div>
    </div>
  )
}

export default Map
