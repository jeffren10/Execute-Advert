import React from 'react'
import ReactPlayer from 'react-player'
import './Demo.css'


const Demo = () => {
  return (
    <div className='demo' id='demo'>
      <div className='container'>
        <div className='col-1'>
            <p>More Than 100 Financial Planners,</p>
            <p>One Philosophy</p>
            <p>Every single one of our financial advisor receivers rigorous training according to John Doe's philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance. </p>
            <button className='button'>Get your free financial analysis</button>
        </div>
        <div className='col-2'>
        <ReactPlayer style={{width:"570", height:"320"}}   url='https://www.youtube.com/shorts/B89qZnQp5cM' title='youtube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ' allowFullScreen />
         
        </div>
      </div>
    </div>
  )
}

export default Demo

