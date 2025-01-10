import React, { useEffect, useState } from 'react'
import './content.css'

import FeaturedProducts from './FeaturedProducts'
import VideoContent from './VideoContent/VideoContent'

const Images = [
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/111824-services-ms-ignite-2560x900.jpg?fmt=pjpg&pscan=auto&scl=1&hei=900&wid=2560&resMode=sharp2&size=2560,900&op_usm=1.75,0.3,2,0',
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/111924-super-computing-doors-blue-dots-2560x900.jpg?fmt=pjpg&pscan=auto&scl=1&hei=900&wid=2560&resMode=sharp2&size=2560,900&op_usm=1.75,0.3,2,0',
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/100324-uds-vision-event-2560x900.jpg?fmt=pjpg&pscan=auto&scl=1&hei=900&wid=2560&resMode=sharp2&size=2560,900&op_usm=1.75,0.3,2,0'
]

const Content = () => {
const [currentIndex, setCurrentIndex] = useState(0)

useEffect(()=>{
    const id = setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1) % Images.length)   
       
    },3000)
    return () => clearInterval(id);
},[])


  return (
    <>
    <div className='main-container'>
    <div className="image-container">
        <img
          src={Images[currentIndex]}
          alt="images"
          className={`image ${currentIndex === currentIndex ? 'show' : ''}`}
        />

</div>
    <div id="content-box" style={{display : currentIndex===0 ? 'block' : 'none'}}>
        <h2>ANNOUNCING</h2>
        <div>
        Servers and Rack <br /> Solutions for the <br /> Future
        </div>
        <h3>Learn about the exciting infrastructure <br /> and services coming to the Dell AI <br /> Factory.</h3>
        <button>Explore</button>
    </div>
    <div id="content-box" style={{display : currentIndex===1 ? 'block' : 'none'}} >
        <h2>DELL AND MICROSOFT</h2>
        <div>
        Leading Innovation <br />Together at the <br />Speed of AI
        </div>
        <h3>Dell and Microsoft partner to transform <br />how people live, work, and do business.</h3>
        <button>Learn More</button>
    </div>
    <div id="content-box" style={{display : currentIndex===2 ? 'block' : 'none'}}>
        <h2>REBROADCAST</h2>
        <div>
        Smart Storage for <br />Tomorrow's <br />Opportunities
        </div>
        <h3>Gain customer and partner insights on the <br />importance of future-proof storage.</h3>
        <button>Watch More</button> <button>Learn More</button>
    </div>
    </div>

   <div className='p-container'>
   <div className="product-container">
    <div className="products">
        <span>Artificial Intelligence</span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/product-wayfinder/datacenter-la9450t-product-wayfinder-480x360.jpg?fmt=png-alpha&wid=480&hei=360" alt="product-img" />
    </div>
    <div className="products">
        <span>Servers</span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-warm-b2l-servers-pexe9680.png?fmt=png-alpha&wid=480&hei=360" alt="product-img" />
    </div>
    <div className="products">
        <span>Data Storage</span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-powerstore-480x360.png?fmt=png-alpha&wid=480&hei=360" alt="product-img" />
    </div>
    <div className="products">
        <span> Dell APEX Multicloud & aaS</span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360" alt="product-img" />
    </div>
    <div className="products">
        <span> Laptops </span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/laptop-xps9340-480x360.png?fmt=png-alpha&wid=480&hei=360" alt="product-image" />
    </div>
    <div className="products">
        <span> Desktops & All-in-Ones </span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-in3030.png?fmt=png-alpha&wid=480&hei=360" alt="roduct-image" />
    </div>
    <div className="products">
        <span> Monitors </span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/product-wayfinder/dell-homepage-product-wayfinding-cold-monitors-u4025qw.png?fmt=png-alpha&wid=480&hei=360" alt="product-image" />
    </div>
    <div className="products">
        <span> PC Accessories </span>
        <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360" alt="product-image" />
    </div>
   </div>
   </div>
   <FeaturedProducts/>
   <VideoContent/>
    </>
  )
}

export default Content
