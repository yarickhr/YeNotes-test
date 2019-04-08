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
/* локализация */
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_uk from 'react-intl/locale-data/uk';
import messages_uk from "./translations/uk.json";
import messages_en from "./translations/en.json";


/* redux, store */
const store = configureStore();

/* оффлайн */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/* локализация */
addLocaleData([...locale_en, ...locale_uk]);

const messages = {
  'uk': messages_uk,
  'en': messages_en
};
const defaultLanguage = 'uk';
let language = navigator.language.split(/[-_]/)[0];  // language without region code
console.log(language);
language = 'ru';
language = language in messages ? language : defaultLanguage;



const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <IntlProvider locale={language} messages={messages[language]}>
        <App />
      </IntlProvider>
    </ConnectedRouter>
  </Provider>,
  target
);