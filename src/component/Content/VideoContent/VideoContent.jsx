import React from 'react'
import bgImage from './asset/bg-img.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './video.css'

const VideoContent = () => {
  return (
   <div className='v-content'>
     <div className='video-bg'>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" className='video'/>
      </video>
    </div>
    <div className="video-content">
        <h2>CREATING A BRIGHTER FUTURE</h2>
        <div>
        Boosting Employee's Access to AI-Ready <br />Tech
        </div>
        <h3>Learn how Zurich Insurance refreshes devices with Dell APEX PCaaS so employees can use the latest high- <br />performance technologies including GenAI.</h3>
        <div className='btn'>
            <button> Play Video </button>
        </div>
        <div className='series-btn'>
        <button> Explore <FontAwesomeIcon icon={faArrowRight}/></button> <button> Learn More <FontAwesomeIcon icon={faArrowRight}/> </button> <button> View All Stories <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    </div>
   </div>
  )
}

export default VideoContent
