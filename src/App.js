import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Helmet from "react-helmet";

const CASES = {
  'nominative': 'Називний',
  'genitive': 'Родовий',
  'dative': 'Давальний',
  'accusative': 'Знахідний',
  'instrumental': 'Орудний',
  'locative': 'Місцевий',
};

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

    let preposition = <span dangerouslySetInnerHTML={{__html: word && word.locative_label}} />;

    return (
      <div className="App">

        <Helmet
          htmlAttributes={{"lang": form_data ? form_data.lang : 'en' }}
          title={meta ? meta.title : 'YeNotes'}
          meta={[
            {"name": "description", "content": meta && meta.description},
            {"name": "keywords", "content": meta && meta.keywords}
          ]}
          />


        {result && (
          <main className="main">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}

            <h1>{word.main_field_value} ({word.word_type.abbr})</h1>
            <h2>{word.main_field_value} - {word.word_type.name} ({word.number_formatted})</h2>

            <table>
              <thead>
                <tr>
                  <td>Відмінки</td>
                  <td>Чоловічий та середній</td>
                  <td>Жіночий</td>
                </tr>
              </thead>
              <tbody>
                {
                  Object.entries(CASES).map( ([caseName, caseValue], i, arr) => {
                    return (<tr key={caseName}>
                      <td>{caseValue}</td>
                      <td>
                        { i===arr.length-1 ?  preposition : '' }
                        &nbsp;{ word[caseName + "_masculine"] }
                        { word[caseName + "_masculine_another1"] && ", " + word[caseName + "_masculine_another1"] }
                      </td>
                      <td>
                        { i===arr.length-1 ?  preposition : '' }
                        &nbsp;{ word[caseName + "_feminine"] }
                        { word[caseName + "_feminine_another1"] && ", " + word[caseName + "_feminine_another1"] }
                      </td>
                    </tr>)
                  })
                }
              </tbody>

            </table>

          </main>
        )}
      </div>
    );
  }
}

export default App;
