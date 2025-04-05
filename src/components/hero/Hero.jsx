import React from 'react'
import './hero.css'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon  from '../assets/arrow.png'
import hero_image from "../assets/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="" srcset="" />
            </div>
            <p>collection</p>
            <p>every one</p>

        </div>
        <div className="hero-latest-btn">
            <div>latest collection</div>
            <img src={arrow_icon} alt="" srcset="" />
        </div>
            </div>
            <div className="hero-right">
<img src={hero_image} alt="" />
            </div>
    </div>
  )
}

export default Hero