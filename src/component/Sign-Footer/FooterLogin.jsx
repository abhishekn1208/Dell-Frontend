import React from 'react'
import './footer.sign.css'
import { Link } from 'react-router'

const FooterLogin = () => {
  return (
    <>
       <div className="footer-signin">
      <nav>
        <ul>
          <li>
            <Link>About Us
            </Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Community</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>Partner Program</Link>
          </li>
          <li>
            <Link>Dell Premier</Link>
          </li>
          <li>
            <Link>Dell Technologies</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="footer-bottom">
      <div className="footersignbtm">
        <ul>
          <li>
            <Link>Copyright © 2024 Dell Inc.</Link>
          </li>
          <li>
            <Link>Terms of Sale</Link>
          </li>
          <li>
            <Link>Privacy Statement</Link>
          </li>
          <li>
            <Link>Cookies, Ads & Emails</Link>
          </li>
          <li>
            <Link>Legal & Regulatory</Link>
          </li>
          <li>
            <Link>Returns</Link>
          </li>
          <li>
            <Link>Accessibility</Link>
          </li>
          <li>
            <Link>ESG & Impact</Link>
          </li>
          <li>
            <Link>Recycling</Link>
          </li>
          <li>
            <Link>Privacy Centre</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Site Map</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default FooterLogin
