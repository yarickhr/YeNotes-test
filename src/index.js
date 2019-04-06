import React from 'react';
import { render } from 'react-dom';

import App from './containers/App/App';
// import App from './containers/app';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'sanitize.css/sanitize.css';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/store';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const target = document.querySelector('#root');

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);