import React  from 'react';
import logo from '../../img/logo.jpg';
import search from './search.png';
import './Header.scss';

const Header = () => {
    return (
      <header>
        <div className="container">
          <div className="row row-header align-items-center">

            <div className="col col-menu">
              <i className="fas fa-equals"/>
            </div>

            <div className="col col-logo">
              <img src={logo} alt="logo" className="logo"/>
              <span className="logo-text">Kyiv Dictionary</span>
            </div>

            <div className="col-sm-4 col-search">
              <div className="search">
                <input type="search" placeholder="Поиск"/>
                <button className="btn btn-icon">
                  {/*<i className="fas fa-search"/>*/}
                  <img src={search} alt="search" className="search-icon" width="17"/>
                </button>
              </div>
            </div>

            <div className="col-5 col-sm-3 col-md-2 col-translate">

              <div className="translate">
                <input type="text" value="FR - UA"/>
                <i className="fas fa-exchange-alt"/>
                <button className="btn btn-icon">
                  <i className="fas fa-chevron-down"/>
                </button>
              </div>

            </div>

            <div className="col col-user">
              <button className="btn btn-sm btn-primary">Log In</button>
            </div>

            <div className="col col-language">
              <div className="language">
                <span>UA</span>
                <i className="fas fa-chevron-down"/>
              </div>
            </div>

          </div>
        </div>
      </header>
    );
}

export default Header;
