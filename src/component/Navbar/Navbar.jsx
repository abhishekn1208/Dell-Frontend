import React, { useState } from 'react'
import './navbar.css'
import Bnavbar from './bNavbar'
import { Link} from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faHeadset,faGlobe,faCartShopping,faChevronDown,faBars  } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import SignIn from './Dropdown/signin/SignIn';
import LanguageDropdown from './Dropdown/language/LanguageDropdown';
import CartDropdown from './Dropdown/Cart/CartDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { closeDropdown, toggleDropdown } from '../../redux/Action';
import Signout from './Dropdown/Signout/Signout';


const Navbar = () => {
  const [show, setShow] = useState(false)
  const [drop , setDrop] = useState(false)
  const dispatch = useDispatch()
  const isOpen = useSelector(state =>state.dropdown.isOpen)
 
  let username = localStorage.getItem("username")

  console.log(username)

  return (
    <>
<div>
      <header>
        <div className='nav-t'>
          <div className='bar'>
            <span className='bar-span'>
            <span></span>
            <span></span>
            <span></span>
            </span>
          </div>
            <div className='left-column'>
                <div className='logo'>
                <Link to="/"><img src="https://www.logo.wine/a/logo/Dell_Technologies/Dell_Technologies-Logo.wine.svg" alt="logo" /></Link>
                </div>
                 <div className='search-box'>
                    <input type="text" placeholder='Search Dell' />
                    <FontAwesomeIcon icon={faSearch } className='magnifier'/>
                 </div>
              
            </div>
            <div id='right-column'>
                <div className='h-class' onMouseEnter={()=>setShow((prev)=>!prev)} onMouseLeave={()=>setShow(false)} style={{display : username? 'none' : 'block'}}> <span> <FontAwesomeIcon icon={faUser } className='icon'/>Sign In <FontAwesomeIcon icon={faChevronDown } className='down'/></span></div>
                <div className='h-class' onMouseEnter={()=>setShow((prev)=>!prev)} onMouseLeave={()=>setShow(false)} style={{display : username? 'block' : 'none'}}> <span> <FontAwesomeIcon icon={faUser } className='icon'/>{username} <FontAwesomeIcon icon={faChevronDown } className='down'/></span></div>
                <div><Link to="/contact"><FontAwesomeIcon icon={faHeadset } className='icon'/>Contact Us</Link></div>
                <div onMouseEnter={()=>setDrop((prev)=>!prev)} onMouseLeave={()=>setDrop(false)}><Link to="/language" ><FontAwesomeIcon icon={faGlobe } className='icon'/>IN/EN<FontAwesomeIcon icon={faChevronDown } className='down'/></Link></div>
                {/* <div onMouseEnter={()=>setShowCart((prev)=>!prev)} onMouseLeave={()=>setShowCart(false)}><Link to="/cart" ><FontAwesomeIcon icon={faCartShopping } className='icon'/>Cart<FontAwesomeIcon icon={faChevronDown } className='down'/></Link></div> */}
                <div onMouseEnter={()=>dispatch(toggleDropdown())} onMouseLeave={()=>dispatch(closeDropdown())}><Link to="/cart" ><FontAwesomeIcon icon={faCartShopping } className='icon'/>Cart<FontAwesomeIcon icon={faChevronDown } className='down'/></Link></div>
            </div>
            <div id='right-column2'>
            <div><FontAwesomeIcon icon={faUser } className='icon'/></div>
            <div><FontAwesomeIcon icon={faCartShopping } className='icon'/></div>
            </div>
        </div>
     
        <div className='search-box2'>
                    <input type="text" placeholder='Search Dell' />
                    <FontAwesomeIcon icon={faSearch } className='magnifier'/>
                 </div>
     
      </header>
    </div>
     <Bnavbar id="optional-nav"/>
     {username ? <div className="drop" style={{display : show ? 'block' : 'none'}} onMouseEnter={()=>setShow((prev)=>!prev)} onMouseLeave={()=>setShow(false)}>
     <Signout/>
    </div> : <div className="drop" style={{display : show ? 'block' : 'none'}} onMouseEnter={()=>setShow((prev)=>!prev)} onMouseLeave={()=>setShow(false)}>
    <SignIn/>
    </div>  }
   
    
    <div style={{display: drop ? 'block' : 'none' }} onMouseEnter={()=>setDrop((prev)=>!prev)} onMouseLeave={()=>setDrop(false)}>
    <LanguageDropdown/>
    </div>
    {/* <div style={{display: showcart ? 'block' : 'none' }} onMouseEnter={()=>setShowCart((prev)=>!prev)} onMouseLeave={()=>setShowCart(false)}>
     <CartDropdown/>
    </div > */}

    <div style={{display : isOpen? 'block': 'none'}} onMouseEnter={()=>dispatch(toggleDropdown())} onMouseLeave={()=>dispatch(closeDropdown())}>
   <CartDropdown/>
    </div>
    </>
  )
}

export default Navbar
