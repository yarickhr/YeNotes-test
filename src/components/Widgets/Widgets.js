import React  from 'react';
import './Widgets.scss';

import ivoryCoast from './ivory-coast.png';
import ukraine from './ukraine.png';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="container">

        <div className="row">
          <div className="col-md-5 col-word">
            <div className="widget-title">Слово дня</div>
            <div className="widget-box">
              <div className="label">
                <div className="lang">UK</div>
                <div className="word-title">Dog</div>
                <div className="transcript">/dɑːɡ/</div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-play">
            <div className="widget-title">Грай з нами</div>
            <div className="widget-box">
              <button className="btn btn-success btn-sm">Почати гру</button>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 col-phrase">
            <div className="widget-title">Вислів</div>
            <div className="widget-box half">
              <img src={ivoryCoast} alt="ivory-coast" className="flag" width="29"/>
              <div>
                <b>(фр.)&nbsp;&nbsp;&nbsp;trop poli
                  pour être honnête</b>
              </div>
            </div>
            <i className="fas fa-exchange-alt"/>
            <div className="widget-box half">
              <img src={ukraine} alt="ukraine" className="flag" width="29"/>
              <div>
                <b>(ук.)</b>&nbsp;&nbsp;&nbsp;надто ґречний,
                щоб бути чесним
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-md-2 col-grammar">
            <div className="widget-title">Граматика</div>
            <div className="widget-box">
              <img src={ukraine} alt="ukraine" className="flag" width="29"/>
              <b>
                Passe simple
                <br/>
                (минулий доконаний час)
              </b>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Widgets;
