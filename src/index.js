import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import store from './store.js';

import './Public/css/index.css';
import './Public/css/class.css';
import './Public/css/id.css';
import './Public/bootstrapcss/bootstrap.min.css';

const app = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
