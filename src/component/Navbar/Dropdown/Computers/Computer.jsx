import React from 'react'
import './computer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { closeDesktopDropdown, closeGamingDropdown, closeLaptopDropdown, closeMonitorDropdown, closePcDropdown, closeWorkstationDropdown, toggleDesktopDropdown, toggleGamingDropdown, toggleLaptopDropdown, toggleMonitorDropdown, togglePcDropdown, toggleWorkstationDropdown } from '../../../../redux/Action'

const ComputerDropdown = () => {
    const dispatch = useDispatch()
   
    const isLaptopOpen = useSelector(state=>state.dropdown.isLaptopOpen)
    const isDesktopOpen = useSelector(state=>state.dropdown.isDesktopOpen)
    const isMonitorOpen = useSelector(state=>state.dropdown.isMonitorOpen)
    const isGamingOpen = useSelector(state=>state.dropdown.isGamingOpen)
    const isPCOpen = useSelector(state=>state.dropdown.isPCOpen)
    const isWorkstationOpen = useSelector(state=>state.dropdown.isWorkstationOpen)
  return (
    <div style={{position:'relative', border : '0'}}>
    <div className='computers-container' style={{height : isLaptopOpen? '473px' : (isDesktopOpen ? '344px' : (isMonitorOpen ? '387px' : (isGamingOpen ? '258px' : (isPCOpen ? '387px' : 'auto'))))}}>
        <div className="computers">
            <ul> 
                <li onMouseEnter={()=>dispatch(toggleLaptopDropdown())} onMouseLeave={()=>dispatch(closeLaptopDropdown())}><span>Laptops</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(toggleDesktopDropdown())} onMouseLeave={()=>dispatch(closeDesktopDropdown())}><span>Desktop & All-in-Ones</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(toggleMonitorDropdown())} onMouseLeave={()=>dispatch(closeMonitorDropdown())}><span>Monitors</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(toggleGamingDropdown())} onMouseLeave={()=>dispatch(closeGamingDropdown())}><span>Gaming</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li onMouseEnter={()=>dispatch(togglePcDropdown())} onMouseLeave={()=>dispatch(closePcDropdown())}><span>PC Accessories</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
                <li><span>Parts, Batteries & Upgrades</span></li>
                <li><span>The Clients</span></li>
                <li onMouseEnter={()=>dispatch(toggleWorkstationDropdown())} onMouseLeave={()=>dispatch(closeWorkstationDropdown())}><span>Workstations</span><FontAwesomeIcon icon={faChevronRight} className='infra-icon'/></li>
            </ul>
        </div>
       
    </div>
    {isLaptopOpen &&  <div className="computers-laptops" onMouseEnter={()=>dispatch(toggleLaptopDropdown())} onMouseLeave={()=>dispatch(closeLaptopDropdown())}>
     <div className="laptops-container">
         <ul>
             <li><span>View All Laptops</span></li>
             <li><span>XPS Laptops</span></li>
             <li><span>Latitude Laptops</span></li>
             <li><span>Inspiron Laptops</span></li>
             <li><span>Vostro Laptops</span></li>
             <li><span>Alientware Laptops</span></li>
             <li><span>G Series Laptops</span></li>
             <li><span>Precision Mobile Workstations</span></li>
             <li><span>Chromebook Laptops</span></li>
             <li><span>4G/5G Laptops</span></li>
             <li><span>Copilot+ PCs</span></li>
         </ul>
     </div>
 </div>}

{
    isDesktopOpen &&  <div className="computers-desktop" onMouseEnter={()=>dispatch(toggleDesktopDropdown())} onMouseLeave={()=>dispatch(closeDesktopDropdown())}>
    <div className="desktop-container">
        <ul>
        <li><span>View All Desktops & All-in-Ones</span></li>
             <li><span>Analytics</span></li>
             <li><span>OptiPlex Desktops & All-in-Ones</span></li>
             <li><span>Inspiron Desktops & All-in-Ones</span></li>
             <li><span>Edge Soltuions</span></li>
             <li><span>Vostro Desktops</span></li>
             <li><span>Alienware Desktops</span></li>
             <li><span>Precision Fixed Workstations</span></li>
        </ul>
    </div>
 </div>
}
{
    isMonitorOpen && <div className="computers-monitor" onMouseEnter={()=>dispatch(toggleMonitorDropdown())} onMouseLeave={()=>dispatch(closeMonitorDropdown())}>
    <div className="monitor-container">
        <ul>
        <li><span>View All Monitors</span></li>
             <li><span>Gaming Monitors</span></li>
             <li><span>Alienware Monitors</span></li>
             <li><span>Ultrawide Monitors</span></li>
             <li><span>4K Monitors</span></li>
             <li><span>Curved Monitors</span></li>
             <li><span>Monitors with Speakers</span></li>
             <li><span>Video Conferencing Monitors</span></li>
             <li><span>Monitor Accessories</span></li>
        </ul>
    </div>
</div>
}
{
    isGamingOpen && <div className="computers-gaming" onMouseEnter={()=>dispatch(toggleGamingDropdown())} onMouseLeave={()=>dispatch(closeGamingDropdown())}>
    <div className="gaming-container">
        <ul>
        <li><span>Alienware</span></li>
             <li><span>Dell Gaming</span></li>
             <li><span>Gaming Laptops</span></li>
             <li><span>Gaming Desktops</span></li>
             <li><span>Alienware & Gaming Monitors</span></li>
             <li><span>Gaming Accessories</span></li>
        </ul>
    </div>
</div>
}
{
    isPCOpen && <div className="computers-pc" onMouseEnter={()=>dispatch(togglePcDropdown())} onMouseLeave={()=>dispatch(closePcDropdown())}>
    <div className="pc-container">
        <ul>
        <li><span>View All PC Accessories</span></li>
             <li><span>Docking Stations</span></li>
             <li><span>Audio</span></li>
             <li><span>Keyboards & Mice</span></li>
             <li><span>Cables & Adapters</span></li>
             <li><span>Laptop Bags & Cases</span></li>
             <li><span>Networking Accessories</span></li>
             <li><span>Hard Drives & Storage</span></li>
             <li><span>Webcams</span></li>
        </ul>
    </div>
</div>
}
{
    isWorkstationOpen && <div className="computers-workstation" onMouseEnter={()=>dispatch(toggleWorkstationDropdown())} onMouseLeave={()=>dispatch(closeWorkstationDropdown())} style={{height: '344px'}}>
    <div className="workstation-container">
        <ul>
        <li><span>View All Workstations</span></li>
             <li><span>Precision Mobile Workstations</span></li>
             <li><span>Precision Fixed Workstations</span></li>
        </ul>
    </div>
</div>
}
 </div>

  )
}

export default ComputerDropdown
