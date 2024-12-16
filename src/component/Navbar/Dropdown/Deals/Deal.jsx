import React from 'react'
import './deal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { closeBusinessDropdown, closePurchaseDropdown, toggleBusinessDropdown, togglePurchaseDropdown } from '../../../../redux/Action'

const Deals = () => {
    const dispatch = useDispatch()
   
    const isBusinessOpen = useSelector(state=>state.dropdown.isBusinessOpen)
    const isPurchaseOpen = useSelector(state=>state.dropdown.isPurchaseOpen)

  return (
    <div style={{position:'relative', border : '0'}}>
    <div className='deals-container'>
        <div className="deals">
            <ul> 
                <li><span>View All Deals</span></li>
                <li><span>Laptop Deals</span></li>
                <li ><span>Lifecycle Services</span></li>
                <li ><span>Desktop Deals</span></li>
                <li><span>Gaming PC Deals</span></li>
                <li onMouseEnter={()=>dispatch(toggleBusinessDropdown())} onMouseLeave={()=>dispatch(closeBusinessDropdown())}><span>Business Deals</span><FontAwesomeIcon icon={faChevronRight} /></li>
                <li><span>Monitor Deals</span></li>
                <li><span>Computer Accessories Deals</span></li>
                <li><span>Dell Price Match</span></li>
                <li onMouseEnter={()=>dispatch(togglePurchaseDropdown())} onMouseLeave={()=>dispatch(closePurchaseDropdown())}><span>Member Discounts</span><FontAwesomeIcon icon={faChevronRight} /></li>
                <li><span>Dell Rewards</span></li>
                <li><span>Laptop Buying Guide</span></li>
                <li><span>Server Advisor</span></li>
            </ul>
        </div>
       
    </div>
    {isBusinessOpen &&  <div className="deals-business" onMouseEnter={()=>dispatch(toggleBusinessDropdown())} onMouseLeave={()=>dispatch(closeBusinessDropdown())} style={{height:'559px'}}>
     <div className="business-container">
         <ul>
             <li><span>Business Laptop Deals</span></li>
             <li><span>Business Desktop Deals</span></li>
         </ul>
     </div>
 </div>}

{
    isPurchaseOpen &&  <div className="deals-Purchase"onMouseEnter={()=>dispatch(togglePurchaseDropdown())} onMouseLeave={()=>dispatch(closePurchaseDropdown())} style={{height:'559px'}}>
    <div className="Purchase-container">
        <ul>
        <li><span>Employee Purchase Program</span></li>
             <li><span>Student Purchase Program</span></li>
             <li><span>Dell Expert Network</span></li>
             <li><span>Dell Professional Associations</span></li>
             <li><span>Dell for Startups</span></li>
        </ul>
    </div>
 </div>
}

 </div>

  )
}

export default Deals
