import axios from "axios";
import { WORD_HAS_ERRORED,
  WORD_IS_LOADING,
  WORD_NOT_FOUND,
  WORD_LOADING_SUCCESS } from '../const/actionTypes';

export function wordHasErrored(bool) {
  return {
    type: WORD_HAS_ERRORED,
    hasErrored: bool
  };
}

export function wordIsLoading(bool) {
  return {
    type: WORD_IS_LOADING,
    isLoading: bool
  };
}

export function wordNotFound(bool) {
  return {
    type: WORD_NOT_FOUND,
    notFound: bool
  };
}

export function wordLoadingSuccess(data) {
  return {
    type: WORD_LOADING_SUCCESS,
    data: data
  };
}


export function getSearchRequest(word) {

  return (dispatch) => {
    dispatch(wordIsLoading(true));

    // fetch(url)
    //   .then((response) => {
    //     console.log(response)
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //
    //     dispatch(wordIsLoading(false));
    //
    //     return response;
    //   })
    //   .then((response) => response.json())
    //   .then((items) => dispatch(wordLoadingSuccess( items ))) // ES6 property value shorthand for { items: items }
    //   .catch(() => dispatch(wordHasErrored( true )));


    axios.defaults.baseURL = 'http://www.api.yenotes.com';
    axios.get('/words/conjugation/search/', {
      params: {
        format: 'json',
        lang: 'uk',
        word: word
      }
    })
      .then( response => {
        dispatch(wordIsLoading(false));
        let data = response.data;
        if (response.data.result.words) {
          dispatch(wordLoadingSuccess( data ));
          dispatch(wordNotFound( false ));
          // this.setState({
          //   json: response.data,
          //   notFound: false
          // });
        } else {
          dispatch(wordNotFound( true ));

          // this.setState({
          //   notFound: true
          // });
        }

      })
      .catch(function (error) {
        console.dir(error);
        dispatch(wordHasErrored( true ));
      });

  }

}