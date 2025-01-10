import React from 'react'
import './bnavbar.css'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { closeComputerDropdown, closeDealsDropdown, closeInfraDropdown, closeServicesDropdown, closeSupportDropdown, toggleComputerDropdown, toggleDealsDropdown, toggleInfraDropdown, toggleServicesDropdown, toggleSupportDropdown } from '../../redux/Action';
import Infra from './Dropdown/Infra/Infra';
import ComputerDropdown from './Dropdown/Computers/Computer';
import Services from './Dropdown/Services/Service';
import Support from './Dropdown/Support/Support';
import Deals from './Dropdown/Deals/Deal';

const Bnavbar = () => {
  const dispatch = useDispatch()
  const isInfraOpen = useSelector(state=>state.dropdown.isInfraOpen)
  const isComputerOpen = useSelector(state=>state.dropdown.isComputerOpen)
  const isServicesOpen = useSelector(state=>state.dropdown.isServicesOpen)
  const isSupportOpen = useSelector(state=>state.dropdown.isSupportOpen)
  const isDealsOpen = useSelector(state=>state.dropdown.isDealsOpen)
  return (
    <>
    <div className='b-navbar'>
    <ul>
        <li><Link>Artificial Intelligence</Link></li>
        <li onMouseEnter={()=>dispatch(toggleInfraDropdown())} onMouseLeave={()=>dispatch(closeInfraDropdown())}>IT Infrastructure <FontAwesomeIcon icon={faChevronDown } className='icon'/></li>
        <li onMouseEnter={()=>dispatch(toggleComputerDropdown())} onMouseLeave={()=>dispatch(closeComputerDropdown())}>Computers & Accessories <FontAwesomeIcon icon={faChevronDown } className='icon'/></li>
        <li onMouseEnter={()=>dispatch(toggleServicesDropdown())} onMouseLeave={()=>dispatch(closeServicesDropdown())}>Services <FontAwesomeIcon icon={faChevronDown }className='icon' /></li>
        <li onMouseEnter={()=>dispatch(toggleSupportDropdown())} onMouseLeave={()=>dispatch(closeSupportDropdown())}>Support <FontAwesomeIcon icon={faChevronDown } className='icon'/></li>
        <li onMouseEnter={()=>dispatch(toggleDealsDropdown())} onMouseLeave={()=>dispatch(closeDealsDropdown())}>Deals <FontAwesomeIcon icon={faChevronDown } className='icon'/></li>
        <li><Link to="/store">Find a Store</Link></li>
    </ul>
    </div>
    {isInfraOpen &&  <div onMouseEnter={()=>dispatch(toggleInfraDropdown())} onMouseLeave={()=>dispatch(closeInfraDropdown())}>
     <Infra/>
    </div>}
    {isComputerOpen &&  <div onMouseEnter={()=>dispatch(toggleComputerDropdown())} onMouseLeave={()=>dispatch(closeComputerDropdown())}>
    <ComputerDropdown/>
    </div>}
    {
      isServicesOpen && <div onMouseEnter={()=>dispatch(toggleServicesDropdown())} onMouseLeave={()=>dispatch(closeServicesDropdown())}>
       <Services/>
     </div>
    }
 {
  isSupportOpen && <div onMouseEnter={()=>dispatch(toggleSupportDropdown())} onMouseLeave={()=>dispatch(closeSupportDropdown())}>
      <Support/>
  </div>
 }
 {isDealsOpen && <div onMouseEnter={()=>dispatch(toggleDealsDropdown())} onMouseLeave={()=>dispatch(closeDealsDropdown())}>
  
   <Deals/>
  </div>}
    </>
  )
}

export default Bnavbar
