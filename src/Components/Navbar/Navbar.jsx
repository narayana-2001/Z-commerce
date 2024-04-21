/*
import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="nav-logo">
         <img src={logo} alt="" />
         <p>SHOPPER</p>
       </div>
       <ul className="nav-menu">
        <li>Shop<Link/><hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
       </ul>
       <div className="nav-login-cart">
         <button>Login</button>
         <img src={cart_icon} alt="" />
         <div className="nav-cart-count">0</div>
       </div>
    </div>
  )
}

export default Navbar

*/
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
       <div className="nav-logo">
         <img src={logo} alt="" />
         <p>SHOPPER</p>
       </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Shop{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Shop{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Shop{menu==="kids"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
         <button>Login</button>
         <img src={cart_icon} alt="" />
         <div className="nav-cart-count">0</div>
       </div>
    </div>
  )
}

export default Navbar
