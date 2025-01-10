import React from 'react'
import './bannercontent.css'

const BannerContent = () => {
  return (
    <div id='banner-content'>
        <div className='banner-content-img'>
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/merged-category/laptops-category-hero-all-laptops-2560x235.png?fmt=pjpg&pscan=auto&scl=1&hei=235&wid=2560&qlt=100,0&resMode=sharp2&size=2560,235" alt="banner" />
        </div>
        <div className='b-content'>
            <h2>Laptop Computers</h2>
            <p>Shop our best laptops and notebooks from Dell.</p>
        </div>
    </div>
  )
}

export default BannerContent
