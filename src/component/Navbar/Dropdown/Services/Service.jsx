import React from 'react'
import './service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { closeLifecycleDropdown, closeProfessionalDropdown, toggleLifecycleDropdown, toggleProfessionalDropdown } from '../../../../redux/Action'

const Services = () => {
    const dispatch = useDispatch()
   
    const isProfessinalOpen = useSelector(state=>state.dropdown.isProfessinalOpen)
    const isLifecycleOpen = useSelector(state=>state.dropdown.isLifecycleOpen)

  return (
    <div style={{position:'relative', border : '0'}}>
    <div className='services-container' style={{height : isProfessinalOpen? '301px' : 'auto'}}>
        <div className="services">
            <ul> 
                <li><span>View All Services</span></li>
                <li onMouseEnter={()=>dispatch(toggleProfessionalDropdown())} onMouseLeave={()=>dispatch(closeProfessionalDropdown())}><span>Professional Services</span><FontAwesomeIcon icon={faChevronRight} /></li>
                <li onMouseEnter={()=>dispatch(toggleLifecycleDropdown())} onMouseLeave={()=>dispatch(closeLifecycleDropdown())}><span>Lifecycle Services</span><FontAwesomeIcon icon={faChevronRight} /></li>
                <li ><span>Training & Certification</span></li>
                <li><span>Technology & Tools</span></li>
                <li><span>Premier: e-Procurement & Integrations</span></li>

            </ul>
        </div>
       
    </div>
    {isProfessinalOpen &&  <div className="services-professional" onMouseEnter={()=>dispatch(toggleProfessionalDropdown())} onMouseLeave={()=>dispatch(closeProfessionalDropdown())}>
     <div className="professional-container">
         <ul>
             <li><span>View All Professional Services</span></li>
             <li><span>Artificial Intelligence Services</span></li>
             <li><span>Multicloud Services</span></li>
             <li><span>Data & Applications Services</span></li>
             <li><span>Modern Workforce Services</span></li>
             <li><span>Infrastructure Accessories</span></li>
             <li><span>Security & Resiliency Services</span></li>
         </ul>
     </div>
 </div>}

{
    isLifecycleOpen &&  <div className="services-lifecycle" onMouseEnter={()=>dispatch(toggleLifecycleDropdown())} onMouseLeave={()=>dispatch(closeLifecycleDropdown())} style={{height:'277px'}}>
    <div className="lifecycle-container">
        <ul>
        <li><span>View All Lifecycle Services</span></li>
             <li><span>Deployment Services</span></li>
             <li><span>Managed & Residency Services</span></li>
             <li><span>Support Services</span></li>
             <li><span>Recovery & Recycling Services</span></li>
        </ul>
    </div>
 </div>
}

 </div>

  )
}

export default Services
