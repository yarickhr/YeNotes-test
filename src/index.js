import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
/* внутри проекта */
import 'sanitize.css/sanitize.css';
import App from './containers/App/App';
/* redux, store */
import { Provider } from 'react-redux';
import configureStore, { history } from './store/store';
/* оффлайн */
import * as serviceWorker from './serviceWorker';


/* redux, store */
let initialState = {
  notFound: false
};
const store = configureStore(initialState);

/* оффлайн */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


const target = document.querySelector('#root');


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);

