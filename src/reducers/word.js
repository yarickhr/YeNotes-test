import {
  WORD_HAS_ERRORED,
  WORD_IS_LOADING,
  WORD_NOT_FOUND,
  WORD_LOADING_SUCCESS, WORD_REQUEST
} from '../const/actionTypes';


export function wordHasErrored(state = false, action) {
  switch (action.type) {
    case WORD_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function wordIsLoading(state = false, action) {
  switch (action.type) {
    case WORD_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

/* если запрос успешный, но такого слова нету в базе */
export function wordNotFound(state = false, action) {
  switch (action.type) {
    case WORD_NOT_FOUND:
      return action.notFound;

    default:
      return state;
  }
}

export function wordRequest(state = '', action) {
  switch (action.type) {
    case WORD_REQUEST:
      return action.word;

    default:
      return state;
  }
}

export function wordLoadingSuccess(state = [], action) {
  switch (action.type) {
    case WORD_LOADING_SUCCESS:
      return action.data;

    default:
      return state;
  }
}
