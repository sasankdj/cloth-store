import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for u</h1>
            <h1>ONLY ON BEST SELLERS PRODUCTS</h1>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Offers