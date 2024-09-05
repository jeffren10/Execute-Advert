import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero' 
import About from './Components/About'
// import Testimonials from './Components/testimonials'
import Demo from './Components/Demo'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Testimonials /> */}
      <Demo />
      <Footer />
    </div>
  )
}

export default App
