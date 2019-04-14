import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Helmet from "react-helmet";

import './Home.scss';

import { wordRequest } from '../../actions/word';

class Home extends Component {

  render() {

    return (
      <div className="page">

        {/*<Helmet*/}
          {/*htmlAttributes={{"lang": form_data ? form_data.lang : 'en' }}*/}
          {/*title={meta ? meta.title : 'YeNotes'}*/}
          {/*meta={[*/}
            {/*{"name": "description", "content": meta && meta.description},*/}
            {/*{"name": "keywords", "content": meta && meta.keywords}*/}
          {/*]}*/}
          {/*/>*/}


        {/*<Header search={this.props.wordRequest}/>*/}

        <main className="main">
          <h1>Home</h1>
          {/*<Widgets/>*/}
        </main>

        {/*<Footer/>*/}
      </div>
    );
  }

}

// export default App;
// const mapStateToProps = (state) => {
//   return {
//     hasErrored: state.wordHasErrored,
//     isLoading: state.wordIsLoading,
//     notFound: state.wordNotFound,
//     data: state.wordLoadingSuccess
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSearchRequest: (word) => dispatch(getSearchRequest(word))
//   };
// };

export default connect((state) => ({ // same as separate mapStateToProps and mapDispatchToProps, but in connect
    hasErrored: state.wordHasErrored,
    isLoading: state.wordIsLoading,
    notFound: state.wordNotFound,
    data: state.wordLoadingSuccess
}), {
  wordRequest
})(Home);
