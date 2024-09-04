import React from 'react'
 import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='container'>
        <ul>
          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/'>About</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Testimonial</a>
          </li>
          <li className='nav-item'>
            <a href='/'>Demo</a>
          </li>
        </ul>
        <div className='button'>
          <span className='line'></span>
          <p>2020 Execute, Inc, All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
