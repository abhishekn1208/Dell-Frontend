import React, { useEffect } from 'react'

const useFavicon = (faviconUrl) => {
    useEffect(()=>{
        const link = document.querySelector('link[rel ="icon"]');
        if(link){
            link.href= faviconUrl
        }
    },[faviconUrl])
 
}

export default useFavicon
