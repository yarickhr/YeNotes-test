import axios from "axios";
import {
  WORD_HAS_ERRORED,
  WORD_IS_LOADING,
  WORD_NOT_FOUND,
  WORD_REQUEST,
  WORD_LOADING_SUCCESS
} from '../const/actionTypes';
import {push} from "connected-react-router";

import { updateIntl } from 'react-intl-redux';


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

export function wordRequest(word) {
  return {
    type: WORD_REQUEST,
    word
  };
}

export function wordLoadingSuccess(data) {
  return {
    type: WORD_LOADING_SUCCESS,
    data
  };
}



// export function getSearchRequest(word) { // move this to middleware

//   return (dispatch) => {
//     dispatch(wordRequest(word));
//     dispatch(wordIsLoading(true));

//     axios.defaults.baseURL = 'http://www.api.yenotes.com';
//     axios.get('/words/conjugation/search/', {
//       params: {
//         format: 'json',
//         lang: 'uk',
//         word: word
//       }
//     })
//       .then( response => {
//         dispatch(wordIsLoading(false));
//         let data = response.data;
//         if (data && data.result && data.result.words) {
//           dispatch(wordLoadingSuccess( data ));
//           dispatch(wordNotFound( false ));
//           dispatch(push('/numeral/' + word));
//         } else {
//           dispatch(wordNotFound( true ));
//         }

//       })
//       .catch(function (error) {
//         console.dir(error);
//         dispatch(wordHasErrored( true ));
//       });

//   }

// }


export function changeLocale(locale) {
  return dispatch => {
    console.log('in');
    dispatch(updateIntl({
      locale
    }));
  }
}