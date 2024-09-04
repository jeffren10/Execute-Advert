import React from 'react'
import John from './images/John-doe.png'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <img src={John} alt='John' />
        <div className='col-2'>
          <h2>About</h2>
            <span className='line'></span>
            <p>Intense is an International Financial Planning Company with office in multiple jurisdictions over the world working  with intense gives me the ability to advise international expatriates living in the middle east from where i live in Nigeria  </p>

            <p> I am John Doe, a senior advisor for an independently owned financial planing company called Intense.</p>
            <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default About
