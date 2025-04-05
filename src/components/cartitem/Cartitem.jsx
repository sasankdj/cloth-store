import React, { useContext } from 'react'
import './cartitem.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../assets/cart_cross_icon.png'
const Cartitem = () => {
    const {totalcartamout,all_product,cartitem,removefromcart}=useContext(Shopcontext);
  return (
    <div className='cartitem'>
        <div className="cartitems-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartitem[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-main">
                <img src={e.image} alt="" className='cartitem-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartitem[e.id]}</button>
                <p>${e.new_price*cartitem[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removefromcart(e.id)}} alt="" />
            </div>
        </div>
        }
        return null;
       })}
       <div className="cartitems-down">
             <div className="cart-total">
            <h1>Cart total</h1>
            
            
            <div className="cart-total-item">
                <p>Sub total</p>
                <p>${totalcartamout()}</p>
            </div>
            <hr />
            <div className="cart-total-item">
                <p>Shipping fee</p>
                <p>free</p>
            </div>
            <hr />
            <div className="cart-total-item">
                <h3>Total</h3>
                <h3>${totalcartamout()}</h3>
            </div>
            <div>
                <button className='cart-btn'>PROCEED TO CHECK OUT</button>
            </div>
            </div>
            <div className="cart-promocode">
                <p>If you have a promo code enter it here</p>
                <div className="cart-promobox">
                    <input type="text" placeholder='promo code'/>
                    <button>SUBMIT</button>
                </div>
            </div>
       </div>
       
    </div>
  )
}

export default Cartitem