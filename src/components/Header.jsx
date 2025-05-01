import React, { useRef } from 'react'
import logo1 from '../image/header2.png'
import logo2 from '../image/header_logo2.png'
import logo3 from '../image/header_logo3.png'
import burger from '../image/burger.png'

import { NavLink } from 'react-router-dom'
import '../style/header.css'
function Header() {

  let modal = useRef()


  function openModal() {
    modal.current.classList.add("openModal")
   }
   function closeModal() {
    modal.current.classList.remove("openModal")
   }

  return (
    <div className='header'>
      <div className="container">
        <div className="header_wrapper">
          <div className="modal" ref={modal}>
            <div className="modal_wrapper">
              <ul>
                <h1 onClick={closeModal}>X</h1>
                <li onClick={closeModal}><NavLink to="/">About</NavLink></li>
                <li onClick={closeModal}><NavLink to="/map">Map</NavLink></li>
                <li onClick={closeModal}><NavLink to="/zoo">Zoos</NavLink></li>
                <li onClick={closeModal}><NavLink to="/contact">Contact Us</NavLink></li>
                <li onClick={closeModal}><NavLink to="/error">Design</NavLink></li>
                <li onClick={closeModal}><NavLink to="/myaccount">MY ACCOUNT</NavLink></li>
              </ul>
            </div>
          </div>





          <div className="ul">
            <div className="imgg">
              <NavLink to="/"><img src={logo1} alt="" /></NavLink>
            </div>

            <ul className='li'>
              <li><NavLink to="/map">Map</NavLink></li>
              <li><NavLink to="/zoo">Zoos</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/error">Design</NavLink></li>
            </ul>
          </div>
          <div className="header_logo">
            <img src={logo2} alt="" />
            <NavLink to={"/myaccount"}> <img className='iii' src={logo3} alt="" /></NavLink>
          </div>
          <div className="burger">
            <img onClick={openModal}  width={50} src={burger} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
