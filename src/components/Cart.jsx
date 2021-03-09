import React from 'react'

function Cart({cartItems, setCartItems,count}) {

    return (
      <div>
        <div><h1 className="cart-h1">CART</h1></div>
        
        <div className="cart">
          <div className="six">
            {cartItems.map((cartItems) => (
              
              <div className="cart-items">
                <div><img className="cart-items-img" src= {cartItems.image} alt={cartItems.name + " image"}/></div>
                <ul>
                  <li>{cartItems.name}</li>
                </ul>
                <span>Price:${cartItems.price}</span>
              </div>
              
                ))}
                
            <div className="six">Total price :$ {count}.00</div>
          </div>
          <div className="cart-checkout">
          <div></div>
          <div></div><br></br>
          <div className="totalCheckout">${count}.00</div><br></br>
          <div>Please checkout below</div><br></br>
          <button className="checkoutButton"
          onClick={() => {
            setCartItems([])
            // setCount(0)
            alert("Thank you for your purchase")
          }}
          
          >Proceed To Checkout</button>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Cart;