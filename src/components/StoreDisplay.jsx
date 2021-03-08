import React, {useState} from 'react'
import Product from './Product'

const Search = ({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal, search, count, /*setCount*/}) => {

let searchResult = products.filter(function(product){

    return (
        product.name.toLowerCase().includes(search)
        
    )
})

    return (
        <div className='store-display'>
            <div className='store-display-inner'>
                    

                {searchResult.map((products) => (
            <Product  
            key={products.id}
            products={products} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            count={count}
            // setCount={setCount}
            />
      ))}           
                </div>
            </div>
    )   
}

export default Search;
