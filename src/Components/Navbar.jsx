import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa" 
import logo from "./images/logo.jpg"

import "./Navbar.css"

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/' className='logo'>
        <img src={logo} alt='logo.jpg' />
        </a>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />) : (< FaBars size={30} style={{color: '#ffffff'}} />)}  
         
        </div>
        <u1 className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='home' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className='nav-item'>
            <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
          </li>
          <li className='nav-item'>
            <a href='#demo' onClick={closeMenu}>Demo</a>
          </li>
        </u1>
      </nav>
    </div>
  )
}

export default Navbar











