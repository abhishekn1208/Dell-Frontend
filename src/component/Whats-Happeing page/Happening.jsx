import React from 'react'
import './happening.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Happening = () => {
  return (
    <div className='happen-container'>
        <div className="happening">
            <div className="happening-content">
            <h4>Latest from Dell Technologies</h4>
            <div>What's Happening</div>
            </div>
            <div className="happening-boxes">
                <div className="happening-box">
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/whats-happening/uhp-whats-happening-whatwedo-480x360.jpg?wid=480&amp;hei=360" alt="image" />
                    <div>
                        <p>What We Do</p>
                        <button>Learn More <FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
                    </div>
                </div>
                <div className="happening-box">
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/non-product-images/lifestyle/gettyimages-1182617831-pr7530t-480x360.jpg?wid=480&amp;hei=360" alt="image" />
                    <div>
                        <p>Four Keys to Optimal <br />Outcomes with Generative <br />AI</p>
                        <button>Learn More <FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
                    </div>
                </div>
                <div className="happening-box">
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/031424-tl-data-dna-480x360.jpg?wid=480&amp;hei=360" alt="image" />
                    <div>
                        <p>Building Your Innovation <br />Muscle in the Era of AI</p>
                        <button>Read Report<FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
                    </div>
                </div>
                <div className="happening-box">
                    <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/hp-banner-esg-480x360-jpg.jpg?wid=480&amp;hei=360" alt="image" />
                    <div>
                        <p>Our Purpose in Action</p>
                        <button>Read Report <FontAwesomeIcon icon={faArrowRight} className='arrow'/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Happening
