import React, { Component } from 'react';
import {Route} from "react-router";

import './App.scss';
import "../../fonts/fontawesome/css/all.css";
import "../../styles/bootstrap-grid.min.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Widgets from '../Widgets/Widgets';
import Numeral from '../../pages/Numeral/Numeral';
import Home from "../../pages/Home/Home";


class App extends Component {

  render() {


    return (
      <div className="page">

        <Header/>

        <main className="main">
          <Route path="/numeral/:word" component={Numeral} />
          <Route path="/" exact component={Home} />
          <Widgets/>
        </main>

        <Footer/>
      </div>
    );
  }

}

export default App;
