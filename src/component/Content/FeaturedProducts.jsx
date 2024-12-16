import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './featured.css'

const featuredData = [
    {
      title: "LATITUDE LAPTOPS",
      subtitle: "AI-Enhanced Productivity",
      description: "Unlock next-level computing with AI PCs and Intel",
      imgUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/promo-carousel/latitude-csb-dell-lifestyle-latitude-9450-uhp-2502-11-ca-promo-c-lf-1610x906.jpg",
    },
    {
      title: "XPS SERIES",
      subtitle: "Performance and Style",
      description: "Elevate your productivity with sleek and powerful laptops.",
      imgUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/111224-dell-native-edge-stella-ultra-promo-desktop-1610x906.jpg/?wid=1610&hei=906",
    },
    {
      title: "ALIENWARE GAMING",
      subtitle: "Next-Level Gaming",
      description: "Unleash the power of gaming with cutting-edge technology.",
      imgUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/cm-sb-dell-ls-pr5490-t560-u2724de-km5221w-sp3022-wd22tb4-wb7022-uhp-2504-05-us-promo-1610x906.jpg?wid=1610&hei=906",
    },
  ];
  
const FeaturedProducts = () => {

    const [focusedIndex, setFocusIndex]= useState(0)

    useEffect(()=>{
        const id = setInterval(()=>{
            setFocusIndex((prev)=>(prev+1)%featuredData.length)
        },3000)
        return ()=>clearInterval(id)
    },[])


  return (
    <div id='featured-main'>
        <div className='heading'>
        <h3>Dell Technologies Showcase</h3>
        <div>Featured Products and Solutions</div>
        </div>
      
     <div className="featured-slider" >
        {
            featuredData.map((ele,index)=>{
                return(
                    <div key={index} className={`featured-container ${index=== focusedIndex ? 'focused' : ''}`} style={{transform : `translateX(-${focusedIndex*100}%)`}}>
                    <div className="featured-content">
                        <h2>{ele.title}</h2>
                        <div>
                        {ele.subtitle}
                        </div>
                        <h3>{ele.description}</h3>
                        <button> Shop Now <FontAwesomeIcon icon={faArrowRight} className='f-icon'/></button>
                    </div>
                    <div className='featured-image'>
                        <img src={ele.imgUrl} alt="image" />
                    </div>
                  </div>
                )
            })
        }
    
     </div>
    </div>
  )
}

export default FeaturedProducts
