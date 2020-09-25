import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header.js';
import ProductList from './components/ProductList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Header cart={[]} />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
