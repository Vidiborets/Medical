import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import './App.module.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.querySelector('#root'),
);
