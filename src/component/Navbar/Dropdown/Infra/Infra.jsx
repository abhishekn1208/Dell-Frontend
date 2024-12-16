import React from 'react'
import './infra.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {   closeIndustryDropdown, closeProductDropdown, closeWorkloadDropdown, toggleIndustryDropdown, toggleProductDropdown, toggleWorkloadDropdown } from '../../../../redux/Action'

const Infra = () => {
    const dispatch = useDispatch()
   
    const isProductOpen = useSelector(state=>state.dropdown.isProductOpen)
    const isWorkloadOpen = useSelector(state=>state.dropdown.isWorkloadOpen)
    const isIndustryOpen = useSelector(state=>state.dropdown.isIndustryOpen)
  return (
    <div style={{position:'relative', border : '0'}}>
    <div className='infra-container' style={{height : isProductOpen? '301px' : (isWorkloadOpen ? '344px' : (isIndustryOpen ? '492px' : 'auto'))}}>
        <div className="infra">
            <ul> 
                <li><span>Dell APEX Multicloud & aaS</span></li>
                <li onMouseEnter={()=>dispatch(toggleProductDropdown())} onMouseLeave={()=>dispatch(closeProductDropdown())}><span>Products</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(toggleWorkloadDropdown())} onMouseLeave={()=>dispatch(closeWorkloadDropdown())}><span>Workloads</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(toggleIndustryDropdown())} onMouseLeave={()=>dispatch(closeIndustryDropdown())}><span>Industry</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li><span>Payment Solutions</span></li>
                <li><span>Developers & DevOps</span></li>
            </ul>
        </div>
       
    </div>
    {isProductOpen &&  <div className="infra-products" onMouseEnter={()=>dispatch(toggleProductDropdown())} onMouseLeave={()=>dispatch(closeProductDropdown())}>
     <div className="products-container">
         <ul>
             <li><span>Servers</span></li>
             <li><span>Data Storage</span></li>
             <li><span>Data Protection</span></li>
             <li><span>Hyperconverged Infrastructure</span></li>
             <li><span>Networking</span></li>
             <li><span>Infrastructure Accessories</span></li>
             <li><span>AlOps & IT Observability</span></li>
         </ul>
     </div>
 </div>}

{
    isWorkloadOpen &&  <div className="infra-workloads" onMouseEnter={()=>dispatch(toggleWorkloadDropdown())} onMouseLeave={()=>dispatch(closeWorkloadDropdown())}>
    <div className="workloads-container">
        <ul>
        <li><span>View All Products</span></li>
             <li><span>Analytics</span></li>
             <li><span>Cloud Solutions</span></li>
             <li><span>Data Management</span></li>
             <li><span>Edge Soltuions</span></li>
             <li><span>Kubernetes & Containers</span></li>
             <li><span>Security Solutions</span></li>
             <li><span>Virtual Desktop Infrastructure</span></li>
        </ul>
    </div>
 </div>
}
{
    isIndustryOpen && <div className="infra-industry" onMouseEnter={()=>dispatch(toggleIndustryDropdown())} onMouseLeave={()=>dispatch(closeIndustryDropdown())}>
    <div className="industry-container">
        <ul>
        <li><span>View All Industries</span></li>
             <li><span>Digital Cities</span></li>
             <li><span>Energy, Climate, Action & <br />Sustainability</span></li>
             <li><span>Financial</span></li>
             <li><span>Healthcare & Life Sciences</span></li>
             <li><span>Higher Education</span></li>
             <li><span>K-12 Education</span></li>
             <li><span>Retail</span></li>
             <li><span>Safety & Security</span></li>
             <li><span>Telecommunications</span></li>
             <li><span>Utilities</span></li>
        </ul>
    </div>
</div>
}
 </div>

  )
}

export default Infra
