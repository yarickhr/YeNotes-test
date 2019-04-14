import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Numeral.scss';

import { CASES } from '../../const/cases';
import {Helmet} from "react-helmet";
import {wordRequest} from "../../actions/word";
import {connect} from "react-redux";

class Numeral extends Component {

  componentDidMount() {
    // alert('word');
    let word = this.props.router.location.pathname.split('/')[2];
    this.props.wordRequest( word );
  }

  render() {

    let form_data = this.props.data.form_data;
    let meta = this.props.data.meta;
    let result = this.props.data.result;
    let found = !this.props.notFound;
    let word = result && result.words[0];
    let preposition = <span dangerouslySetInnerHTML={{__html: word && word.locative_label + ' '}} />;

    // console.log(this.props.match.url + '/' + word && word.main_field_value);

    // if (this.props.isLoading) {
    //   return <Redirect to={'/numeral/' + this.props.word} />
    // } else {
      return (

        <div className="page">

          <Helmet
            htmlAttributes={{"lang": form_data ? form_data.lang : 'en'}}
            title={meta ? meta.title : 'YeNotes'}
            meta={[
              {"name": "description", "content": meta && meta.description},
              {"name": "keywords", "content": meta && meta.keywords}
            ]}
          />


          <div className="word">
            {result && <div className="container">


              {!found && <div className="word-title">Слово не знайдене. Повторіть пошук</div>}

              {found && (
                <div>
                  <div className="row">
                    <div className="col offset-lg-1 heading">
                      <div className="word-title">{word.main_field_value} ({word.word_type.name.toLowerCase()})</div>
                      <div
                        className="word-explanation">({word.explanations.general.length ? word.explanations.general : 'кількість'})
                      </div>
                    </div>
                  </div>


                  <div className="row">

                    <div className="col-sm-3 col-lg-2 offset-lg-1">
                      <div className="side">
                        <button className="btn btn-md btn-primary">{word.main_field_value} ({word.word_type.abbr})
                        </button>
                        <button className="btn btn-md btn-secondary">{word.main_field_value} ({word.word_type.abbr})
                          ({word.number_formatted})
                        </button>
                      </div>
                    </div>

                    <div className="col-sm-9 col-lg-8">
                      <div className="table">
                        <table>
                          <thead>
                          <tr>
                            <th>Відмінки</th>
                            <th>Чоловічий та&nbsp;середній</th>
                            <th>Жіночий</th>
                          </tr>
                          </thead>
                          <tbody>
                          {
                            Object.entries(CASES).map(([caseName, caseValue], i, arr) => {
                              return (<tr key={caseName}>
                                <td>{caseValue}</td>
                                <td>
                                  {i === arr.length - 1 && word[caseName + "_masculine"] ? preposition : ''}
                                  {word[caseName + "_masculine"]}
                                  {word[caseName + "_masculine_another1"] && ", " + word[caseName + "_masculine_another1"]}
                                  {!word[caseName + "_masculine"] && !word[caseName + "_masculine_another1"] && "-"}
                                </td>
                                <td>
                                  {i === arr.length - 1 && word[caseName + "_feminine"] ? preposition : ''}
                                  {word[caseName + "_feminine"]}
                                  {word[caseName + "_feminine_another1"] && ", " + word[caseName + "_feminine_another1"]}
                                  {!word[caseName + "_feminine"] && !word[caseName + "_feminine_another1"] && "-"}
                                </td>
                              </tr>)
                            })
                          }
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>}
          </div>

        </div>
      );

  }
}

Numeral.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  notFound: PropTypes.bool.isRequired,
};
// export default App;
// const mapStateToProps = (state) => {
//   return {
//     hasErrored: state.wordHasErrored,
//     isLoading: state.wordIsLoading,
//     notFound: state.wordNotFound,
//     data: state.wordLoadingSuccess,
//     router: state.router
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // getSearchRequest: (word) => dispatch(getSearchRequest(word)),
//     wordRequest
//   };
// };

export default connect((state) => ({ // same as separate mapStateToProps and mapDispatchToProps, but in connect
  hasErrored: state.wordHasErrored,
  isLoading: state.wordIsLoading,
  notFound: state.wordNotFound,
  data: state.wordLoadingSuccess,
  router: state.router
}), {wordRequest})(Numeral);
