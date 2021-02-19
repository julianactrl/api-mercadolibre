import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
    
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/productdetail" component={ProductDetail} />
            </Switch>
        </Router> 
    </div>
  );
}

export default App;
