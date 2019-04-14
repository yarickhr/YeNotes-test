import axios from "axios";
import {
  WORD_HAS_ERRORED,
  WORD_IS_LOADING,
  WORD_NOT_FOUND,
  WORD_REQUEST,
  WORD_LOADING_SUCCESS
} from '../../const/actionTypes';

// dispatch(wordRequest(word));
export default store => next => async action => {
    const {type, word} = action;

    if (type !== WORD_REQUEST) return next(action);

    next(await {type: WORD_IS_LOADING,  isLoading: true}); //   // dispatch(wordIsLoading(true)); 

    try {
        axios.defaults.baseURL = 'http://www.api.yenotes.com';

        const response = await axios.get('/words/conjugation/search/', {
            params: {
                format: 'json',
                lang: 'uk',
                word: word
            }
        });

        if (response) {
            next(await {type: WORD_IS_LOADING,  isLoading: false}); //   // dispatch(wordIsLoading(true)); 
        }

        const {data} = response;

        if (data && data.result && data.result.words) {
            next(await {type: WORD_LOADING_SUCCESS,  data});
        } else {
            next(await {type: WORD_NOT_FOUND,  notFound: true});
        }


      } catch (error) {
        console.dir(error);
        next(await {type: WORD_HAS_ERRORED,  hasErrored: true});
      }
}