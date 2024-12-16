import React from 'react'
import './signinright.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCompass, faIdBadge } from '@fortawesome/free-regular-svg-icons'

const SignInRight = () => {
  return (
    <>
       <div className="right-content">
              <div className="right-box">
                <h1>Dell Account Benefits</h1>
                <div id='acc-text'>Manage it all from your account.</div>
                <div className="sign-manage">
                  <div className="items">
                    <FontAwesomeIcon icon={faBookmark} className='sign-font'/>
                    <div>Saved Items</div>
                    <p>Save, compare, and shop your favorite products with ease.</p>
                  </div>
                  <div className="items">
                  <FontAwesomeIcon icon={faCompass} className='sign-font'/>
                    <div>Order Tracking</div>
                    <p>Track and manage your orders.</p>
                  </div>
                  <div className="items">
                  <FontAwesomeIcon icon={faIdBadge} className='sign-font'/>
                    <div>Profile Setting</div>
                    <p>Checkout faster with saved payment methods and addresses.</p>
                  </div>
                </div>
                <div className="right-image">
                  <div className="sign-img">
                    <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/xps-9530-my-account-460x460.png" alt="image" />
                  </div>
                </div>
              </div>
          </div>
    </>
  )
}

export default SignInRight
