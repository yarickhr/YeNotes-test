import React, {memo}  from 'react';
import './Footer.scss';

import chrome from './chrome.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

const Footer = () => {

    // alert('footer');


    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-brand">Київський словник</div>
              <div className="footer-legacy">
                Авторське право (c), YeNotes, 2018.
                <br/>
                Усі права застережено.
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="translates">
                <div className="title">Кількість перекладів:</div>
                <div className="value">140 222</div>
              </div>
            </div>

            <div className="col-lg-6">
              <ul className="footer-menu">
                <li>Зв’язок</li>
                <li>Про&nbsp;нас</li>
                <li>Вакансії</li>
                <li>Угода з користувачем</li>
              </ul>
              <ul className="footer-socials">
                <li>
                  <img src={chrome} alt="chrome" height="24"/>
                </li>
                <li>
                  <img src={facebook} alt="facebook" height="24"/>
                </li>
                <li>
                  <img src={instagram} alt="instagram" height="24"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default memo(Footer);
