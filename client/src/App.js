import React from 'react';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';

//-------- REDUX --------------------
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Router>
            <Switch>
              <Provider store={store}>
                <Route exact path="/" component={Home} />
              </Provider>
            </Switch>
        </Router> 
    </div>
  );
}

export default App;
