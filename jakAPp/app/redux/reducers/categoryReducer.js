import {
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_JOKE_START,
  GET_JOKE_SUCCESS,
  GET_JOKE_FAILED,
} from '../constants';

const initialState = {
  categories: [],
  isLoading: false,
  jokes: [],
  isLoadingJoke: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
        isLoadingJoke: false,
      };
    case GET_JOKE_START:
      return {
        ...state,
        isLoadingJoke: true,
      };
    case GET_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categoriesJoke: action.payload,
      };
    case GET_JOKE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
