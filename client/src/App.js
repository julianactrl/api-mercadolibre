import React from 'react';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';

//-------- REDUX --------------------
import {Provider} from 'react-redux'
import generateStore from './redux/store'

import { ToastProvider } from 'react-toast-notifications';

function App() {

  const store = generateStore()

  return (
    <div className="App">
      <Router>
            <Switch>
              <Provider store={store}>
                <ToastProvider>
                  <Route exact path="/" component={Home} />
                </ToastProvider>
              </Provider>
            </Switch>
        </Router> 
    </div>
  );
}

export default App;
