import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import reducers from './reducers/reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// Import Middleware
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'

// Import React Router
import { Router, browserHistory } from 'react-router'
import Routes from './routes'


// Create Store
// Create Store
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
