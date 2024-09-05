import React from 'react'
import Users1 from './images/Users1.avif'
import Users2 from './images/Users2.jpg'
import Users3 from './images/Users3.avif'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <div className='container'>
        <h2>Testimonials</h2>
        <span className='line'></span>
        <div className='content'>
          <div className='card'>
            <img src={Users3} alt='Users3.avif' />
            <p>In just 2 very short meetings with John he manage to find the solution personally catered to my solution and expectations. punctual, will informed and very reliable. </p>
            <p><span>Tasha patrick</span></p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className='card'>
            <img src={Users2} alt='Users2.avif' />
            <p>it is not day that you come across a passionate and trustworthy financial advisor John Doe is the professional who does his work really well Thanks John  </p>
            <p><span>Jerry .M.J</span></p>
            <p>Managing Director of BPW Globa </p>
          </div>
          <div className='card'>
            <img src={Users1} alt='Users1.avif' />
            <p> i have a professional financial advisor, who is true to his word John has demonstrated a high amount of integrity in the time that i have known him, and he is fast to respond </p>
            <p><span>Maureen J.P </span></p>
            <p>Director of "Financial Times"</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials
