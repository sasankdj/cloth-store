import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from "../assets/star_icon.png"
import start_dull_icon from "../assets/star_dull_icon.png"
import { Shopcontext } from '../../context/Shopcontext'
const Productdispaly = (props) => {
    const {product}=props;
    const {addtocart}=useContext(Shopcontext);
  return (
    <div className='product-display'>
<div className="productdiaplay-left">
    <div className="productdisplay-imglist">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
    <div className="productdiaplay-img">
        <img className='productdiaplay-main-img' src={product.image} alt="" />
    </div>
</div>
<div className="productdiaplay-right">
    <h1>{product.name}</h1>
    <div className="productdiaplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={start_dull_icon} alt="" />
        <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">{product.old_price}</div>
        <div className="productdisplay-right-price-new">{product.new_price}</div>
    </div>
    <div className="productdisplay-right-description">
        A light weight usally knitted .pullower shirt , close fitting and with a round  neckline 
        and short sleeves , worn as an undershirt or outer garment 
    </div>
    <div className="productdisplay-right-size">
        <h1>select size</h1>
        <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>

   
    <button onClick={()=>{
        console.log("triggered");
        addtocart(product.id);
        }}>ADD TO CART</button>
    <p className='productdisplay-right-category'><span>Category:</span>Women,Tshirt, Crop top</p>
    <p className='productdisplay-right-category'><span>Tags:</span>Modern, latest</p>

</div>
    </div>
  )
}

export default Productdispaly