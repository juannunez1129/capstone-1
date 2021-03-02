import React, {useState} from 'react';
import inventory from './inventory.json'
import './App.css';
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  const [products, setProducts] = useState(inventory.products)
  // const [cartItems, setCartItems] = useState([])
  const [search, setSearch] = useState('')
    

  

  return (
    <Router>
      <div className="App">
        <Nav
          cartItems={cartItems}
        />
          <Route exact path="/" render = {() => (
              <Store 
              products={products} 
              setProducts={setProducts} 
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              search={search}
              setSearch={setSearch}
              count={count}
              setCount={setCount}
              />
          )}/> 
          <Route exact path="/Store" render = {() => (
              <Store 
              products={products} 
              setProducts={setProducts} 
              cartItems={cartItems}
              setCartItems={setCartItems}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              search={search}
              setSearch={setSearch}
              count={count}
              setCount={setCount}
              />
          )}/> 
          <Route exact path="/Cart" render = {() => (
              <Cart 
              cartItems={cartItems}
              setCartItems={setCartItems}
              count={count}
              setCount={setCount}
              />
          )}/> 
        

      </div>
    </Router>
  );
}

export default App;
