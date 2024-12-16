import React from 'react'
import bgImage from './asset/bg-img2.webm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './bottomvideo.css'

const BottomVideo = () => {
  return (
   <div className='v-content2'>
     <div className='video-bg2'>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" className='video'/>
      </video>
    </div>
    <div className="video-content2">
        <h2>ADVANCING SUSTAINABILITY</h2>
        <div>
        At the Core of Everything We Do
        </div>
        <h3>Creating sustainable products and solutions that drive change.</h3>
        <div className='btn2'>
            <button> Play Video </button>
        </div>
        <div className='series-btn2'>
        <button> Explore <FontAwesomeIcon icon={faArrowRight}/></button> <button> Learn More <FontAwesomeIcon icon={faArrowRight}/> </button> <button> View All Stories <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    </div>
   </div>
  )
}

export default BottomVideo
