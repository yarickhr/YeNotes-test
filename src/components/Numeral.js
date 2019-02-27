import React, { Component } from 'react';

const CASES = {
  'nominative': 'Називний',
  'genitive': 'Родовий',
  'dative': 'Давальний',
  'accusative': 'Знахідний',
  'instrumental': 'Орудний',
  'locative': 'Місцевий',
};

class Numeral extends Component {

  render() {

    let word = this.props.word;

    let preposition = <span dangerouslySetInnerHTML={{__html: word && word.locative_label + ' '}} />;

    return (
      <main className="main">

            <div className="word-title">{word.main_field_value} ({word.word_type.abbr})</div>
            {word.explanations.general.length ? <div className="word-explanation">({word.explanations.general})</div> : ''}

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
                        { word[caseName + "_masculine"] }
                        { word[caseName + "_masculine_another1"] && ", " + word[caseName + "_masculine_another1"] }
                      </td>
                      <td>
                        { i===arr.length-1 ?  preposition : '' }
                        { word[caseName + "_feminine"] }
                        { word[caseName + "_feminine_another1"] && ", " + word[caseName + "_feminine_another1"] }
                      </td>
                    </tr>)
                  })
                }
              </tbody>

            </table>

      </main>
    );
  }
}

export default Numeral;
