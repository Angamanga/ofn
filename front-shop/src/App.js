import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header.js';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './products.json';

import './App.css';

function App() {
  const [cart, updateCart] = useState([]);
  const handleCart = (e, product) => {
    e.preventDefault();
    let newState = cart.includes(product) ? cart.filter(p => p.id !== product.id) : [...cart, product];
    updateCart(newState);
  }

  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
          <Switch>
            <Route exact path="/">
              <ProductList products={products} cart={cart} handleCart={handleCart}/>
            </Route>
            <Route path="/cart">
              <Cart cart={cart} handleCart={handleCart} />
            </Route>
          </Switch>
    	</Router>
    </div>
  );
}

export default App;
