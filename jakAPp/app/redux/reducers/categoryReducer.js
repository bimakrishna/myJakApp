import {
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
} from '../constants';

const initialState = {
  categories: [],
  isLoading: false,
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
        isLoading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
