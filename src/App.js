import React, { Component } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";

import 'normalize.css';
import './App.scss';

import Numeral from './components/Numeral/Numeral';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Widgets from './components/Widgets/Widgets';

class App extends Component {

  state = {
    json: {},
    notFound: false
  };


  componentDidMount() {
    axios.defaults.baseURL = 'http://www.api.yenotes.com';
    this.getSearchRequest('два');
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


        <Header search={this.getSearchRequest}/>

        <main className="main">
          { result && (
            <Numeral word={word} found={!this.state.notFound}/>
          )}
          <Widgets/>
        </main>

        <Footer/>
      </div>
    );
  }

  getSearchRequest = (word) => {
    axios.get('/words/conjugation/search/', {
      params: {
        format: 'json',
        lang: 'uk',
        word: word
      }
    })
      .then( response => {
        console.dir(response);
        if (response.data.result.words) {
          this.setState({
            json: response.data
          });
        } else {
          this.setState({
            notFound: true
          });
        }

      })
      .catch(function (error) {
        console.dir(error);
      });
  }


}

export default App;
