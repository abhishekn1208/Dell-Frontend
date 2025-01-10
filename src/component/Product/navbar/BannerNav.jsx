import React from 'react'
import './bannernv.css'
import { Link } from 'react-router'

const BannerNav = () => {
  return (
    <div id='banner-main'>
        <nav>
            <ul>
                <li><Link>All Laptops</Link></li>
                <li><Link>Everyday</Link></li>
                <li><Link>Performance</Link></li>
                <li><Link>Gaming</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default BannerNav
