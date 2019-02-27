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
      <main className="word">

        <div className="heading">
          <div className="word-title">{word.main_field_value} ({word.word_type.name.toLowerCase()})</div>
          <div className="word-explanation">({word.explanations.general.length ? word.explanations.general : 'кількість'})</div>
        </div>


        <div className="row">

          <div className="side">
            <button className="active">{word.main_field_value} ({word.word_type.abbr})</button>
            <button className="">{word.main_field_value} ({word.word_type.abbr}) ({word.number_formatted})</button>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Відмінки</th>
                  <th>Чоловічий та середній</th>
                  <th>Жіночий</th>
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
          </div>

        </div>


      </main>
    );
  }
}

export default Numeral;
