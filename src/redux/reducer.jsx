import { CLOSE_BUSINESS_DROPDOWN, CLOSE_COMPUTER_DROPDOWN, CLOSE_DEALS_DROPDOWN, CLOSE_DESKTOP_DROPDOWN, CLOSE_DROPDOWN, CLOSE_GAMING_DROPDOWN, CLOSE_INDUSTRY_DROPDOWN, CLOSE_INFRA_DROPDOWN, CLOSE_LAPTOP_DROPDOWN, CLOSE_LIFECYCLE_DROPDOWN, CLOSE_MONITOR_DROPDOWN, CLOSE_PC_DROPDOWN, CLOSE_PRODUCT_DROPDOWN, CLOSE_PROFESSIONAL_DROPDOWN, CLOSE_PURCHASE_DROPDOWN, CLOSE_SERVICES_DROPDOWN, CLOSE_SUPPORT_DROPDOWN, CLOSE_WORKLOADS_DROPDOWN, CLOSE_WORKSTATION_DROPDOWN, OPEN_BUSINESS_DROPDOWN, OPEN_COMPUTER_DROPDOWN, OPEN_DEALS_DROPDOWN, OPEN_DESKTOP_DROPDOWN, OPEN_GAMING_DROPDOWN, OPEN_INDUSTRY_DROPDOWN, OPEN_INFRA_DROPDOWN, OPEN_LAPTOP_DROPDOWN, OPEN_LIFECYCLE_DROPDOWN, OPEN_MONITOR_DROPDOWN, OPEN_PC_DROPDOWN, OPEN_PRODUCT_DROPDOWN, OPEN_PROFESSIONAL_DROPDOWN, OPEN_PURCHASE_DROPDOWN, OPEN_SERVICES_DROPDOWN, OPEN_SUPPORT_DROPDOWN, OPEN_WORKLOADS_DROPDOWN, OPEN_WORKSTATION_DROPDOWN, TOGGLE_DROPDOWN } from "./Action"

const initState ={
    isOpen : false,
    isProductOpen : false,
    isWorkloadOpen : false,
    isIndustryOpen : false,
    isInfraOpen : false,
    isLaptopOpen : false,
    isDesktopOpen : false,
    isMonitorOpen : false,
    isGamingOpen : false,
    isPCOpen : false,
    isWorkstationOpen : false,
    isComputerOpen : false,
    isProfessinalOpen : false,
    isLifecycleOpen : false,
    isServicesOpen : false,
    isSupportOpen : false,
    isDealsOpen :false,
    isBusinessOpen : false,
    isPurchaseOpen : false
   
}

export const DropDownReducer =(state = initState, {type,payload})=>{
    switch(type){   
        case TOGGLE_DROPDOWN :
            return{
               ...state,
               isOpen : !state.isOpen,
            
            }
        case CLOSE_DROPDOWN :
            return{
                ...state,
                isOpen : false,
            
            }
        case OPEN_PRODUCT_DROPDOWN :
            return{
                ...state,
                isProductOpen : !state.isProductOpen
            }
        case CLOSE_PRODUCT_DROPDOWN :
            return{
                ...state,
                isProductOpen : false
            }
        case OPEN_WORKLOADS_DROPDOWN :
            return{
                ...state,
                isWorkloadOpen : !state.isWorkloadOpen
            }
        case CLOSE_WORKLOADS_DROPDOWN :
            return{
                ...state,
                isWorkloadOpen : false
            }
        case OPEN_INDUSTRY_DROPDOWN :
            return{
                ...state,
                isIndustryOpen : !state.isIndustryOpen
            }
        case CLOSE_INDUSTRY_DROPDOWN :
            return{
                ...state,
                isIndustryOpen : false
            }
        case OPEN_INFRA_DROPDOWN :
            return{
                ...state,
                isInfraOpen : !state.isInfraOpen
            }
        case CLOSE_INFRA_DROPDOWN :
            return{
                ...state,
                isInfraOpen : false
            }
        case OPEN_LAPTOP_DROPDOWN :
            return{
                ...state,
                isLaptopOpen : !state.isLaptopOpen
            }
        case CLOSE_LAPTOP_DROPDOWN :
            return{
                ...state,
                isLaptopOpen : false
            }
        case OPEN_DESKTOP_DROPDOWN :
            return{
                ...state,
                isDesktopOpen : !state.isDesktopOpen
            }
        case CLOSE_DESKTOP_DROPDOWN :
            return{
                ...state,
                isDesktopOpen : false
            }
        case OPEN_MONITOR_DROPDOWN :
            return{
                ...state,
                isMonitorOpen : !state.isMonitorOpen
            }
        case CLOSE_MONITOR_DROPDOWN :
            return{
                ...state,
                isMonitorOpen : false
            }
        case OPEN_GAMING_DROPDOWN :
            return{
                ...state,
                isGamingOpen : !state.isGamingOpen
            }
        case CLOSE_GAMING_DROPDOWN :
            return{
                ...state,
                isGamingOpen : false
            }
        case OPEN_PC_DROPDOWN :
            return{
                ...state,
                isPCOpen : !state.isPCOpen
            }
        case CLOSE_PC_DROPDOWN :
            return{
                ...state,
                isPCOpen : false
            }
        case OPEN_WORKSTATION_DROPDOWN :
            return{
                ...state,
                isWorkstationOpen : !state.isWorkstationOpen
            }
        case CLOSE_WORKSTATION_DROPDOWN :
            return{
                ...state,
                isWorkstationOpen : false
            }
        case OPEN_COMPUTER_DROPDOWN :
            return{
                ...state,
                isComputerOpen : !state.isComputerOpen
            }
        case CLOSE_COMPUTER_DROPDOWN :
            return{
                ...state,
                isComputerOpen : false
            }
        case OPEN_PROFESSIONAL_DROPDOWN :
            return{
                ...state,
                isProfessinalOpen : !state.isProfessinalOpen
            }
        case CLOSE_PROFESSIONAL_DROPDOWN :
            return{
                ...state,
                isProfessinalOpen : false
            }
        case OPEN_LIFECYCLE_DROPDOWN :
            return{
                ...state,
                isLifecycleOpen : !state.isLifecycleOpen
            }
        case CLOSE_LIFECYCLE_DROPDOWN :
            return{
                ...state,
                isLifecycleOpen : false
            }
        case OPEN_SERVICES_DROPDOWN :
            return{
                ...state,
                isServicesOpen : !state.isServicesOpen
            }
        case CLOSE_SERVICES_DROPDOWN :
            return{
                ...state,
                isServicesOpen : false
            }
        case OPEN_SUPPORT_DROPDOWN :
            return{
                ...state,
                isSupportOpen : !state.isSupportOpen
            }
        case CLOSE_SUPPORT_DROPDOWN :
            return{
                ...state,
                isSupportOpen : false
            }
        case OPEN_DEALS_DROPDOWN :
            return{
                ...state,
                isDealsOpen : !state.isDealsOpen
            }
        case CLOSE_DEALS_DROPDOWN :
            return{
                ...state,
                isDealsOpen : false
            }
        case OPEN_BUSINESS_DROPDOWN :
            return{
                ...state,
                isBusinessOpen : !state.isBusinessOpen
            }
        case CLOSE_BUSINESS_DROPDOWN :
            return{
                ...state,
                isBusinessOpen : false
            }
        case OPEN_PURCHASE_DROPDOWN :
            return{
                ...state,
                isPurchaseOpen : !state.isPurchaseOpen
            }
        case CLOSE_PURCHASE_DROPDOWN :
            return{
                ...state,
                isPurchaseOpen : false
            }
        default :
            return state
    }  
}