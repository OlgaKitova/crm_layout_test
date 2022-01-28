import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './app/App';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      </Router>
  </Provider>,
  document.getElementById('root')
)
