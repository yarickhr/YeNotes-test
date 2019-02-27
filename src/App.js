import React, { Component } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";

import './App.css';
import Numeral from './components/Numeral'

class App extends Component {

  state = {
      json: {}
    };


  componentDidMount() {
    axios.defaults.baseURL = 'http://www.api.yenotes.com';

    axios.get('/words/conjugation/search/', {
      params: {
        format: 'json',
        lang: 'uk',
        word: 'два'
      }
    })
      .then( response => {
        this.setState({
          json: response.data
        });
        console.dir(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {

    let form_data = this.state.json.form_data;
    let meta = this.state.json.meta;
    let result = this.state.json.result;
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


        <header></header>
        {result && (
          <Numeral word={word}/>
        )}
        <footer></footer>
      </div>
    );
  }
}

export default App;
