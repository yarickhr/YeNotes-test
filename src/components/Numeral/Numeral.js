import React from 'react';

const CASES = {
  'nominative': 'Називний',
  'genitive': 'Родовий',
  'dative': 'Давальний',
  'accusative': 'Знахідний',
  'instrumental': 'Орудний',
  'locative': 'Місцевий',
};

const Numeral = ({word}) => {

  let preposition = <span dangerouslySetInnerHTML={{__html: word && word.locative_label + ' '}} />;

  return (

    <div className="word">
      <div className="container">

        <div className="row">
          <div className="col offset-lg-1 heading">
            <div className="word-title">{word.main_field_value} ({word.word_type.name.toLowerCase()})</div>
            <div className="word-explanation">({word.explanations.general.length ? word.explanations.general : 'кількість'})</div>
          </div>
        </div>


        <div className="row">

          <div className="col-sm-3 col-lg-2 offset-lg-1">
            <div className="side">
              <button className="btn btn-md btn-primary">{word.main_field_value} ({word.word_type.abbr})</button>
              <button className="btn btn-md btn-secondary">{word.main_field_value} ({word.word_type.abbr}) ({word.number_formatted})</button>
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
                  Object.entries(CASES).map( ([caseName, caseValue], i, arr) => {
                    return (<tr key={caseName}>
                      <td>{caseValue}</td>
                      <td>
                        { i===arr.length-1 && word[caseName + "_masculine"] ?  preposition : '' }
                        { word[caseName + "_masculine"] }
                        { word[caseName + "_masculine_another1"] && ", " + word[caseName + "_masculine_another1"] }
                        { !word[caseName + "_masculine"] && !word[caseName + "_masculine_another1"] && "-" }
                      </td>
                      <td>
                        { i===arr.length-1 && word[caseName + "_feminine"] ?  preposition : '' }
                        { word[caseName + "_feminine"] }
                        { word[caseName + "_feminine_another1"] && ", " + word[caseName + "_feminine_another1"] }
                        { !word[caseName + "_feminine"] && !word[caseName + "_feminine_another1"] && "-" }
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
    </div>
  );
}

export default Numeral;
