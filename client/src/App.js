import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
    
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/productdetail" component={ProductDetail} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
        </Router> 
    </div>
  );
}

export default App;
