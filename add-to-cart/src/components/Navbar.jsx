import React, { useState } from 'react'
import './Navbar.css'


import { FaShoppingCart } from "react-icons/fa";

function Navbar({count,onCartClick}) {
    
  
    return (
    <div className="navbar">
      <h1>Fake Store API</h1>
      <button className='cart-btn' onClick={onCartClick}> Cart - {count}   <FaShoppingCart color="#FFC72C" size="25px" /></button>

    </div>
  )
}

export default Navbar
