import React from 'react'
import Filter from './Search'
import StoreDisplay from './StoreDisplay'

function Store({products, setProducts, cartItems, setCartItems, cartTotal, setCartTotal, search, setSearch, count, setCount}) {

    return (
        <div className="main-page">
            <Filter 
            search={search}
            setSearch={setSearch}
            />
            <StoreDisplay
            products={products} 
            setProducts={setProducts} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            search={search}
            count={count}
            setCount={setCount}
            />
        </div>
    );
}
  
  export default Store;