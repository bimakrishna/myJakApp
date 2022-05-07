import {
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
} from '../constants';

const getCategoryStart = () => ({
  type: GET_CATEGORY_START,
});
const getCategoryFailed = () => ({
  type: GET_CATEGORY_FAILED,
});
const getCategorySuccess = payload => ({
  type: GET_CATEGORY_SUCCESS,
  payload: payload,
});

export const getCategory = () => async dispatch => {
  const path = `https://v2.jokeapi.dev/categories`;
  dispatch(getCategoryStart());
  try {
    const res = await Axios.get(path);
    dispatch(getCategorySuccess(res.data.results));
    return res.data.results;
  } catch (err) {
    dispatch(getCategoryFailed());
    console.log(err, 'err');
  }
};
