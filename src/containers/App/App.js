import React, { Component } from 'react';
import {Route} from "react-router";
import {connect} from "react-redux";

import './App.scss';
import "../../fonts/fontawesome/css/all.css";
import "../../styles/bootstrap-grid.min.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Widgets from '../Widgets/Widgets';
import Numeral from '../../pages/Numeral/Numeral';
import Home from "../../pages/Home/Home";
import {changeLocale} from "../../actions/word";

/* локализация */
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_uk from 'react-intl/locale-data/uk';
import messages_uk from "../../translations/uk.json";
import messages_en from "../../translations/en.json";

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



class App extends Component {

  componentDidMount() {
    this.props.changeLocale(language);
  }

  render() {

    return (
      <IntlProvider locale={this.props.locale} messages={messages[this.props.locale]}>
        <div className="page">

          <Header/>

          <main className="main">

            <Route path="/numeral/:word" component={Numeral} />
            <Route path="/" exact component={Home} />
            <Widgets/>
          </main>

          <Footer/>
        </div>

      </IntlProvider>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    locale: state.intl ? state.intl.locale : defaultLanguage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLocale: locale => {

      return dispatch(changeLocale(locale))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
