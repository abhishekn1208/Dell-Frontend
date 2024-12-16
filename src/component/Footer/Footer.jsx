import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router'

const Footer = () => {
  return (
    <div className='footer-container'> 
    <div className='footer'>
        <div className="footer-grid1">
            <div className="footer-content">
                <ul>
                <li className='footer-ln'><FontAwesomeIcon icon={faGlobe}/>IN/EN <FontAwesomeIcon icon={faChevronDown}/></li>
                <li><Link>Site Map</Link></li>
                </ul>
            </div>
            <div className="footer-content">
                <h3>Account</h3>
                <ul>
                    <li><Link>My Account</Link></li>
                    <li><Link>Order Status</Link></li>
                    <li><Link>Profile Settings</Link></li>                                                  
                    <li><Link>My Products</Link></li>                                                  
                </ul>
            </div>
            <div className="footer-content">
                <h3>Support</h3>
                <ul>
                    <li><Link>Support Home</Link></li>
                    <li><Link>Contact Technical Support</Link></li>
                    <li><Link>Returns</Link></li>
                </ul>
            </div>
            <div className="footer-content">
                <h3>Connect with Us</h3>
                <ul>
                    <li><Link>Community</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-grid2">
        <div className="footer-content2">
        <h3>Our Offerings</h3>
                <ul>
                    <li><Link>Artificial Intelligence</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Solutions</Link></li>                                                  
                    <li><Link>Services</Link></li>                                                                
                    <li><Link>Deals</Link></li>                                                                
                </ul>
            </div>
            <div className="footer-content2">
                <h3>Our Company</h3>
                <ul>
                    <li><Link>Who We Are</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Dell Technologies Capital</Link></li>                                                  
                    <li><Link>Investors</Link></li>                                                  
                    <li><Link>Newsroom</Link></li>                                                  
                    <li><Link>Recycling</Link></li>                                                  
                    <li><Link>ESG & Impact</Link></li>                                                  
                    <li><Link>Customer Stories</Link></li>                                                                                               
                </ul>
            </div>
            <div className="footer-content2">
                <h3>Our Partners</h3>
                <ul>
                    <li><Link>Find a Partner</Link></li>
                    <li><Link>OEM Solutions</Link></li>
                    <li><Link>Partner Program</Link></li>
                </ul>
            </div>
            <div className="footer-content2">
                <h3>Resources</h3>
                <ul>
                    <li><Link>Blog</Link></li>
                    <li><Link>Dell Rewards</Link></li>
                    <li><Link>Events</Link></li>
                    <li><Link>Email Sign-Up</Link></li>
                    <li><Link>Privacy Centre</Link></li>
                    <li><Link>Security & Trust Centre</Link></li>
                    <li><Link>Trial Software Downloads</Link></li>
                </ul>
            </div>
        </div>
        <div className='upper-bottom-footer'>
            <ul>
                <li><Link>Dell Technologies</Link></li>
                <li><Link>Dell Premier</Link></li>
            </ul>
        </div>
        <div className='footer-bottom'>
            <ul>
                <li><Link>Copyright © 2024 Dell Inc.</Link></li>
                <li><Link>Terms of Sale</Link></li>
                <li><Link>Privacy Statement</Link></li>
                <li><Link>Cookies, Ads & Emails</Link></li>
                <li><Link>Legal & Regulatory</Link></li>
                <li><Link>Accessibility</Link></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
