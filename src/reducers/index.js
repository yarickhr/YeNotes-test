import { combineReducers } from 'redux';
import {
  wordHasErrored,
  wordIsLoading,
  wordNotFound,
  wordRequest,
  wordLoadingSuccess,
  // callHistoryMethod
} from './word';

export default combineReducers({
  wordHasErrored,
  wordIsLoading,
  wordNotFound,
  wordRequest,
  wordLoadingSuccess,
  // callHistoryMethod
});