import React, { useState } from 'react'
import './rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
  return (
    <div className='rating-container'>
        <div className="rate">
            <div>Based on my visit today, I would say Dell Technologies is...</div>
            <div className='rating'>
                    <span>Not at all innovative</span>
                    {[...Array(7)].map((star,index)=>{
                        const currentIndex= index+1;
                        return(
                            <label key={index}>
                                <input type="radio" name='rating'  value={currentIndex} onClick={()=>setRating(currentIndex)}/>
                                <div><span><FontAwesomeIcon icon={faStar} className='star' 
                                style={{color : currentIndex <=(hover || rating)? 'white' : 'black', fontSize:'30px'}}
                                onMouseEnter={()=>setHover(currentIndex)}
                                onMouseLeave={()=>setHover(null)}
                                /></span></div>
                            </label>
                             
                        )
                    })}
                    
               
                    <span>Extremely innovative</span>
             
            </div>
        </div>
        {rating && <div style={{textAlign:'center', color: 'white'}}>You rated : {rating}</div>}
    </div>
  )
}

export default Rating
