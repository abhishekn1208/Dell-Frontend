import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHeadphones, faICursor, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-main">
      <div className='contact-container'>
      <div className="contact">
        <h2>Contact Us</h2>
      </div>
    </div>
    <div className="contact-help">
      <nav>
        <ul>
          <li><a href="#support-help-section"><span>Help and IT Support</span></a></li>
          <li><a href="#support-service-section"><span>More Services and Support</span></a></li>
          <li><a href="#support-corporate-section"><span>Corporate, Partner, and Membership <br />Programs</span></a></li>
          <li><a href="#support-more-section"><span>Need More Help?</span></a></li>
        </ul>
      </nav>
    </div>
    <div className="support-help" id='support-help-section'>
      <div className="order-support">
        <h2>We’re here for you</h2>
        <div className="chat">
          <div className="chat-support">
              <span><FontAwesomeIcon icon={faHeadphones}/></span>
            <div className='support-content'>
              <div>
              <h1>Get tech support and IT help</h1>
              <p>Identify your device to resolve technical issues yourself or contact tech support for more help.</p>
              </div>
              <div className='chat-button1'><button>Contact Technical Support</button></div>
            </div>
          </div>
          <div className="chat-support">
              <span><FontAwesomeIcon icon={faMessage}/></span>
            <div className='support-content'>
              <div >
              <h1>Chat with sales</h1>
              <p style={{marginTop:'50px'}}>Get expert help and product recommendations for new purchases from a sales advisor.</p>
              </div>
              <div className='chat-button2'>
              <button>Chat with Us Online</button>
              <button>Buy on Whatsapp</button>
                </div>
              
            </div>
          </div>
          <div className="chat-support">
              <span><FontAwesomeIcon icon={faSearch}/></span>
            <div className='support-content'>
              <div>
              <h1>Check your orders</h1>
              <p >View order status, invoices, and contact support.</p>
              </div>
              <div className='chat-button3'>
              <button>Contact Order Support</button>
                </div>
              
            </div>
          </div>
          <div className="chat-support">
              <span><FontAwesomeIcon icon={faICursor}/></span>
            <div className='support-content'>
              <div >
              <h1>Request a sales callback</h1>
              <p>Fill out our form and we’ll call.</p>
              </div>
              <div className='chat-button4'>
              <button>Get a Callback</button>
                </div>
            
            </div>
          </div>
        </div>
        <h2>Quick resources</h2>
        <div className="return">
          <div><span>Returns</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Order Support</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
      </div>
      <div style={{width:'100%', position:'relative', marginTop:'50px'}}>
      <div className="support-timing">
      <div className="timing-content">
      <h3><span>Hours of operation</span></h3>
      <div className='contact-timing'>
        <strong><span>Chat with sales </span></strong>
        <br />
        <span>For Consumer : Mon-Fri, 9am to 6pm</span>
        <br />
        <span>For Business: Mon-Fri, 9am to 6pm</span>
      </div>
      <div className='contact-timing'>
        <strong><span>Call sales: 1800-425-4002</span></strong>
        <br />
        <span>For Consumer : Mon-Fri, 9am to 6pm</span>
        <br />
        <span>For Business: Mon-Fri, 9am to 6pm</span>
      </div>  
      <div className='contact-timing'>
        <strong><span>Buy on WhatsApp:</span></strong>
        <br />
        <span>For Consumer : Mon-Fri, 9am to 6pm</span>
        <br />
        <span>For Business: Mon-Fri, 9am to 6pm</span>
      </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    <div className="more-services" id='support-service-section'>
      <h2>More services and support</h2>
      <div className="services-content">
      <div className="services-div">
          <div><span>Shop Dell Premier</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Enterprise Accounts</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Visit the Dell Community</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
      <div className="services-div">
          <div><span>Find a Partner</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Visit Store Locator</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>International Support</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
      </div>
        <div id='head'> <p>Corporate information</p><p>Rewards and partner programs</p></div>
      <div className="corporate-container" id='support-corporate-section'>
        <div className="info">
       
          <div><span>Learn More About Us</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>View Our Legal Terms</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
        <div className="info">
        
          <div><span>Learn More About Our Member Discount Programs</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Discover Dell Rewards</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
      </div>
      <h2>Where to find us</h2>
      <div className="find-corp" id='support-more-section'>
          <div><span>Corporate Address</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Support</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Dispute Resolution</span><FontAwesomeIcon icon={faChevronDown}/></div>
          <div><span>Service Centers</span><FontAwesomeIcon icon={faChevronDown}/></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
