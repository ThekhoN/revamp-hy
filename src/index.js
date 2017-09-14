import React from 'react';
import ReactDOM from 'react-dom';
import './styles-global/style.css';
import App from './app';
import store from './redux/store';
import {Provider} from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
