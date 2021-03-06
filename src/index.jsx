require("../styles/application.scss");

import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);