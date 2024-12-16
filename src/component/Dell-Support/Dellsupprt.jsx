import React from 'react'
import './dellsupport.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowTrendUp, faCartShopping, faCertificate, faGear, faHeadphones, faHome, faSquarePhoneFlip, faUserShield } from '@fortawesome/free-solid-svg-icons'

const Dellsupprt = () => {
  return (
    <div className='support-bg'>
       <div className="support">
       <div className="support-heading">
            <h2>Dell Support</h2>
            <div>We're Here to Help</div>
            <h3>From offering expert advice to solving complex problems, we've got you <br />covered.</h3>
        </div>
        <div className="support-box">
           <div className='box'>
            <div><FontAwesomeIcon icon={faHome}/></div>
            <h4>Support Home</h4>
           </div>
           <div className='box'>
            <div><FontAwesomeIcon icon={faGear}/></div>
            <h4>Drivers and <br />Downloads</h4>
           </div>
           <div className='box'>
            <div><FontAwesomeIcon icon={faSquarePhoneFlip}/></div>
            <h4>Order Support</h4>
           </div>
           <div className='box'>
            <div><FontAwesomeIcon icon={faCertificate}/></div>
            <h4>Warranty and <br />Contracts</h4>
           </div>
           <div className="box">
           <div><FontAwesomeIcon icon={faHeadphones}/></div>
           <h4>Parts and Upgrades</h4>
           </div>
           </div>
        </div>
        <div className="album">
            <div className="image-container">
               <div className='image-box'>
               <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-premier-1200x675.jpg?wid=1200&hei=675" alt="image" />
               </div>
                <div className='album-content'>
                    <h2>Dell Premier</h2>
                    <h3>Leverage hands-on IT purchasing for your business with <br />personalized product selection and easy ordering via our <br />customizable online platform.</h3>
                    <div className='btn-album'>
                        <button>Sign In <FontAwesomeIcon icon={faArrowRight} className='sign'/></button>
                        <div>Learn about Dell Premier</div>
                    </div>
                    <div className='bottom-album'>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} className='font-icon'/>
                        <p>Simplify Purchasing</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowTrendUp} className='font-icon'/>
                            <p>Discover Insights</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserShield} className='font-icon'/>
                            <p>Shop Securely</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
  
  )
}

export default Dellsupprt
