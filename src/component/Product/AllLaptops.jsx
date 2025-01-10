import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './allproduct.css'
import Navbar from '../Navbar/Navbar'
import ProductNavbar from './navbar/ProductNavbar'
import BannerNav from './navbar/BannerNav'
import BannerContent from './navbar/BannerContent'

const AllLaptops = () => {
    const [data, setData] = useState(null)
    const [sortOption,setSortOption] = useState("")
  
    const fetchProducts=async()=>{
        try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`https://dell-backend-full-stack-egaf.onrender.com/product/get?${sortOption}`,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        if(response.status===201){
            console.log(response.data)
            setData(response.data)
        }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[sortOption],[])

    const handleSelectChange=(e)=>{
        const selectedVal = e.target.value;
        setSortOption(selectedVal)
    }
    


  return (
    <>
        <div>
        <Navbar/>
        <ProductNavbar/>
        <BannerNav/>    
        <BannerContent/>
        </div>

        <div className="product-main">
      <div className="filter-content">
         {data && <p><span>1 </span>to <span>{data.pageSize}</span> of <span>{data.totalProducts}</span> Results</p>}

         <div id='sort'>
         <label htmlFor="sort-product">Sort by:</label>
              <select id="sort-product" value={sortOption} onChange={handleSelectChange}>
                  <option value="">Relevance</option>
                  <option value="minPrice=1">Lowest Price</option>
                  <option value="maxPrice=1">Highest Price</option>
              </select>
         </div>
         
      </div>
      
      </div>
  {data && data.laptop.map((lap,index)=>{
      return(
        <div key={index} id='product-details1'>
         <div id="product-details" >
          <div className="product-internal">
              <div className="product-sample">
                  <div className='small-laps'>
                      <div><img src={lap.frontViewImage} alt="picture" /></div>
                      <div><img src={lap.topViewImage} alt="pciture" /></div>
                  </div>
                  <div className='big-laps'>
                      <img src={lap.frontViewImage} alt="picture" />
                  </div>
              </div>
              <div id='product-details-right'>
               <div className='product-title'>
               <h1>{lap.title}</h1>
               <p>Rating: {lap.rating}(5) <span>Model : {lap.modelNumber}</span></p> 
               </div>
               <div className='product-price'>
                
                  <p>Starting at</p>
                  <h3>₹{lap.price}</h3>
                  </div>
              <div className='product-financing'>
                  <h5>Financing</h5>
                  <p><span style={{color:'blue',cursor:'pointer'}}>No cost EMI</span> available. See options at checkout</p>
              </div>
              <div id='key'>Key Features</div>
              <div className='product-features'>
                {lap.features.map((f,i)=>{
                    return(
                        <div key={i}>
                        <div >{f}</div>
                        </div>
                    )
                })}
    
              </div>
               
              </div> 
          </div>
      </div> 
        </div>
      )
  })}
    </>
  )
}

export default AllLaptops
