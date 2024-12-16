import React from 'react'
import './sign.css'
import { Link } from 'react-router'

const SignIn = () => {
  return (
    <div id='sign-container'>
        <div className='signing'>
            <div className="top-title">
                <h2>Welcome to Dell</h2>
                <h3>My Account</h3>
            </div>
            <ul>
                <li>Place orders quickly and easily</li>
                <li>View orders and track your shipping status</li>
                <li>Create and access a list of your products</li>
            </ul>
            <div className="sign-buttons">
            <Link to="/signin"><button>Sign In</button></Link>
                <Link to="/signup"><button>Create an Account</button></Link>
                <button>Premier Sign In</button>
                <button>Partner Program Sign In</button>
            </div>
        </div>
      
    </div>
  )
}

export default SignIn
