import React, {useState} from 'react'

function product({products, cartItems, setCartItems, count, /*setCount*/ }) 
{
    return (
        <div className='store-display-item'>
            <div><img className="store-display-item-img" src= {products.image} alt={products.name + " image"}/></div>
            
            <ul>
                <li className='name'>{products.name} </li>
                <li>Make: {products.make}</li>
                <li>SN: {products.serial}</li>
                <li>Price: ${parseFloat(products.price)}</li>
            </ul>

            <button className="addToCart"
            onClick={() => {

                setCartItems(cartItems.concat(products))
                console.log(cartItems)

                // setCount(count + parseFloat(products.price))

            }}>
            
                Add To Cart

            </button>              
        </div>
    )
}
export default product;
