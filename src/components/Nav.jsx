import React from 'react'
import { Link } from 'react-router-dom'

function Nav(cartItems) {
  const storeCartStyle = {
    
    color: 'blue',
    textDecoration: 'none'
  };

console.log(cartItems)

  return (
    <nav className="nav-text">
      
      <div>Juan's Reel Shop</div>
      <ul>
        <Link style={storeCartStyle} to="/store">
          <li>Store</li>
        </Link>
        <Link style={storeCartStyle} to="/cart">
          <li>Cart</li>
        </Link>
        
      </ul>
      

    </nav>
  );
}
  
  export default Nav;