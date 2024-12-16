import React, { useRef, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import SignInRight from '../SignInRight/SignInRight'
import FooterLogin from '../Sign-Footer/FooterLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import useFavicon from '../FavIcon/Favicon'
import { BACKEND_API } from '../../../backend_key'

const Signup = () => {
  useFavicon("https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/dell-512.png")
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(true)
  const [error, setError] = useState(null)
  const firstName = useRef(null)
  const lastName = useRef(null)
  const emailInp = useRef(null)
  const passwordInp = useRef(null)


  const handleSubmit=async(e)=>{
     e.preventDefault()
      const newUser = {
        firstname : firstName.current.value,
        lastname : lastName.current.value,
        email : emailInp.current.value,
        password : passwordInp.current.value
      }
      console.log(newUser)

      try {
        const response = await axios.post(`${BACKEND_API}/user/register`,newUser)
        console.log(response)
        if(response.status === 201){
          alert("You're successfully registered, Please login")
          navigate("/signin")
        }else{  
          setError(response.data.msg)
        }
      } catch (error) {
        setError("Registration failed, Please try again!!")
      }
  }




  return (

    <>
      <div className='sign-main'>
      <div className="sign-content">
        <div className="sign-section1">
          <div className="sign-logo">
          <Link to="/"><img src="https://www.logo.wine/a/logo/Dell_Technologies/Dell_Technologies-Logo.wine.svg" alt="logo" /></Link>
          </div>
          <form id='form' onSubmit={handleSubmit}>
          <div className="signup-box">
            <h3>Create Your Account</h3>
            <p id='already-acc'>Already have an account? <span onClick={()=>navigate("/signin")}>Sign In</span></p>
            <div id='inp-signup'><input type="text" placeholder='First Name' ref={firstName} /> <input type="text" placeholder='Last Name' ref={lastName}/></div>
            <div><input className='eyeInput' type="text" placeholder='Email Address' ref={emailInp}/></div>
            <div style={{position:'relative'}} ><input ref={passwordInp} className='eyeInput' type= {showPassword === true? 'password' : 'text'} placeholder='Password'/><FontAwesomeIcon icon={faEye} className='eye' onClick={()=>setShowPassword((prev)=>!prev)} style={{display: showPassword===true ? 'none' : 'block'}}/><FontAwesomeIcon icon={faEyeSlash} className='eye' onClick={()=>setShowPassword((prev)=>!prev)} style={{display: showPassword===false ? 'none' : 'block'}}/></div>
            <p id='circleInfo'><FontAwesomeIcon icon={faCircleInfo} style={{color:'#0063b8', cursor:'pointer'}}/><span>Passwords must be between 8 and 20 characters in length and contain 1 upper case letter, 1 lower case letter, and 1 number.</span></p>

            <p id='signup-content'><span style={{color:'#0063b8', cursor:'pointer'}}>Dell Technologies and its group of companies</span> (“Dell”) would love to stay in touch to hear about your needs and to keep you updated on products, services, solutions, exclusive offers, and special events. For more details on our information practices, see our <span style={{color:'#0063b8', cursor:'pointer'}}>Privacy Statement</span>. You can unsubscribe at any time.</p>
            <div id='label-signup'>
              <label htmlFor="checkbox"> 
              <input type="checkbox" id='checkbox'/>
              <p>Yes, I would like Dell to send me email communications.</p>
              </label>
              
             </div>
              <div style={{textAlign:'left'}}><span id='TandC'>By clicking “Create Account”, you agree to our Terms & Conditions.</span></div>
            <button id='btn1' type='submit'>Create Account</button>
            <button id='btn2' onClick={()=>navigate("/signin")}>Cancel</button>
          </div>
          </form>
        </div>
        <div className="sign-section2">
         <SignInRight/>
        </div>
      </div>
      
    </div>
    <FooterLogin/>  

    </>
  )
}

export default Signup
