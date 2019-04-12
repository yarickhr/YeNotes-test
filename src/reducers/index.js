import { combineReducers } from 'redux';

import { intlReducer } from 'react-intl-redux'

import {
  wordHasErrored,
  wordIsLoading,
  wordNotFound,
  wordRequest,
  wordLoadingSuccess,
} from './word';

export default combineReducers({
  wordHasErrored,
  wordIsLoading,
  wordNotFound,
  wordRequest,
  wordLoadingSuccess,
  intl: intlReducer
});