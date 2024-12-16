import React, { useState } from 'react'
import './language.css'
import America from './America/America'
import Asia from './Asia'

const LanguageDropdown = () => {
    const [america, setAmerica] = useState(false)
    const [asia , setAsia] = useState(false)
 
  return (
    <div className='lang-container'>
        <div className="language">
        <ul>
            <li onClick={()=>{setAmerica(true),setAsia(false)}}>Americas</li>
            <li onClick={()=>{setAsia(true), setAmerica(false)}}>Asia Pacific & Japan</li>
            <li>Europe</li>
            <li>Middle East & Africa</li>
        </ul>
        </div>
    
       {america &&  <America/>}
        {asia && <Asia/>}
    </div>
  )
}

export default LanguageDropdown
