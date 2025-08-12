import React, { useContext, useState } from 'react'
import "./navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'
const Navbar = () => {
  const [menu,setmenu]= useState("shop");
  const {gettotalitems}= useContext(Shopcontext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''></img>
            <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to="/cloth-store">Shop </Link> { menu==="shop"?<hr/>: null }</li>
          <li onClick={()=>{setmenu("mens")}}> <Link style={{textDecoration:'none'}} to="/mens">Men</Link> { menu==="mens"?<hr/>: null } </li>
          <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link> { menu==="womens"?<hr/>: null }</li>
          <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link> { menu==="kids"?<hr/>: null }</li>

        </ul>
      <div className="nav-login-cart">
        <Link to='/login'> <button>login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" srcset="" /></Link>
        
        <div className="nav-cart-count">{gettotalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar;