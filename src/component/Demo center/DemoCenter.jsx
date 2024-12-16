import React from 'react'
import './demo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DemoCenter = () => {
  return (
    <div className='demo-container'>
        <div className='demo'>
            <div className='demo-content'>
                <h2>DEMO CENTER</h2>
                <div>Test Drive the <br />Latest <br />Innovations</div>
                <h3>Experience, experiment and interact with <br />our latest technologies.</h3>
                <button>Learn More</button> <button> Explore Catalog <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
            <div className='demo-image'>
                <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/programs-and-loyalty/dell-homepage-demo-center-desktop-la9510-shutterstock1255156822.jpg?fmt=png-alpha&wid=1200&hei=675" alt="demo-image" />
            </div>
        </div>
      
    </div>
  )
}

export default DemoCenter
