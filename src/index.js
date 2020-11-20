import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import './base.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
