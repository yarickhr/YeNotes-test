import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import {push} from "connected-react-router";

import '../../../node_modules/normalize.css/normalize.css';
import './App.scss';

import Numeral from '../Numeral/Numeral';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Widgets from '../Widgets/Widgets';
import { getSearchRequest } from '../../actions/word';

class App extends Component {

  componentDidMount() {
    this.props.getSearchRequest('два');
  }

  render() {

    let form_data = this.props.data.form_data;
    let meta = this.props.data.meta;
    let result = this.props.data.result;
    let word = result && result.words[0];

    return (
      <div className="page">

        <Helmet
          htmlAttributes={{"lang": form_data ? form_data.lang : 'en' }}
          title={meta ? meta.title : 'YeNotes'}
          meta={[
            {"name": "description", "content": meta && meta.description},
            {"name": "keywords", "content": meta && meta.keywords}
          ]}
          />


        <Header search={this.props.getSearchRequest}/>

        <main className="main">
          { result && (
            <Numeral word={word} found={!this.props.notFound}/>
          )}
          <Widgets/>
        </main>

        <Footer/>
      </div>
    );
  }

}

// export default App;
const mapStateToProps = (state) => {
  return {
    hasErrored: state.wordHasErrored,
    isLoading: state.wordIsLoading,
    notFound: state.wordNotFound,
    data: state.wordLoadingSuccess
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchRequest: (word) => dispatch(getSearchRequest(word))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
