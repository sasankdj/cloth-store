import React from 'react'
import './breakrum.css'
import arrow_icom from "../assets/breadcrum_arrow.png"
const Breakrums = (props) => {
    const {product}=props;
  return (
    <div className='breakrum'>
        HOME <img src={arrow_icom} alt="" /> SHOP  <img src={arrow_icom} alt="" /> {product.category} <img src={arrow_icom} alt="" /> {product.name}

    </div>
  )
}

export default Breakrums