import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Button from '../../components/common/Button';

import logo from '../../img/logo.jpg';
import searchIcon from './search.png';
import './Header.scss';
import {getSearchRequest} from "../../actions/word";
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleSearchClick(e) {
    let searchText = e.target.closest('.search').querySelector('input').value;
    e.target.closest('.search').querySelector('input').value = null;
    return this.props.search(searchText);
  };
  handleKeyUp(e) {
    if (e.key === 'Enter') {
      let searchText = e.target.value;
      e.target.value = null;
      return this.props.search(searchText);
    }
  };

  render() {
    // alert('header');
    return (
      <header>
        <div className="container">
          <div className="row row-header align-items-center">

            <div className="col col-menu">
              <i className="fas fa-equals"/>
            </div>

            <div className="col col-logo">
              <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
                <span className="logo-text">Kyiv Dictionary</span>
              </Link>
            </div>

            <div className="col-sm-4 col-search">
              <div className="search">
                <input type="search" placeholder="Поиск" onKeyUp={this.handleKeyUp}/>
                <Button className={'btn btn-icon'} onClick={this.handleSearchClick}>
                  {/*<i className="fas fa-search"/>*/}
                  <img src={searchIcon} alt="search" className="search-icon" width="17"/>
                </Button>
              </div>
            </div>

            <div className="col-5 col-sm-3 col-md-2 col-translate">

              <div className="translate">
                <input type="text" defaultValue="FR - UA"/>
                <i className="fas fa-exchange-alt"/>
                <Button className={'btn btn-icon'}>
                  <i className="fas fa-chevron-down"/>
                </Button>
              </div>

            </div>

            <div className="col col-user">
              <Button className={'btn btn-sm btn-primary'} text={'Log In'}/>
            </div>

            <div className="col col-language">
              <div className="language">
                <span>
                  <FormattedMessage id="header.lang"
                                    description="Заголовок вибору мови"
                                    values={{ abbr: 'UA' }}/>
                </span>
                <i className="fas fa-chevron-down"/>
              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }
};

// export default App;
const mapStateToProps = (state) => {
  return {
    word: state.wordRequest,
    router: state.router
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    search: word => dispatch(getSearchRequest(word))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
