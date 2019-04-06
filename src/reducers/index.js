import { combineReducers } from 'redux';
import { wordHasErrored, wordIsLoading, wordNotFound, wordLoadingSuccess } from './word';

export default combineReducers({
  wordHasErrored,
  wordIsLoading,
  wordNotFound,
  wordLoadingSuccess
});