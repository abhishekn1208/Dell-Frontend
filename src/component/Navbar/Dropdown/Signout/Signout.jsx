import React from 'react'
import './signout.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'


const Signout = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem("username")
    
    const handleClick=async()=>{
        console.log("clicked")
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      alert("Logged Out successfully")
    }
  return (
    <div id='signout-container'>
        <h3>Welcome, {username}</h3>
        <hr />
    <div className="signout">
        <div className="left">
            <ul>
                <li>
                    <Link>Dell Technologies</Link>
                </li>
                <li>
                    <Link>Premier Sign In</Link>
                </li>
                <li>
                    <Link>Partner Program Sign In</Link>
                </li>
                <li>
                    <Link>Support</Link>
                </li>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li>
                    <Link>My Account</Link>
                </li>
                <li>
                    <Link>Order Status</Link>
                </li>
                <li>
                    <Link>Profile Setting</Link>
                </li>
                <li>
                    <Link>My Saved Items</Link>
                </li>
                <li>
                    <Link>My Products</Link>
                </li>
            </ul>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    </div>
</div>
  )
}

export default Signout
