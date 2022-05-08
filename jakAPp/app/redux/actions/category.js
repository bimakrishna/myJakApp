import {
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_JOKE_START,
  GET_JOKE_SUCCESS,
  GET_JOKE_FAILED,
} from '../constants';
import Axios from 'axios';

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

const getJokeStart = () => ({
  type: GET_JOKE_START,
});
const getJokeFailed = () => ({
  type: GET_JOKE_FAILED,
});
const getJokeSuccess = payload => ({
  type: GET_JOKE_SUCCESS,
  payload: payload,
});

export const getCategory = () => async dispatch => {
  const path = `https://v2.jokeapi.dev/categories`;
  dispatch(getCategoryStart());
  try {
    const res = await Axios.get(path);
    dispatch(getCategorySuccess(res.data.categories));
    return res.data.categories;
  } catch (err) {
    dispatch(getCategoryFailed());
    console.log(err, 'err');
  }
};

export const getJoke = category => async dispatch => {
  console.log(category, 'kateeee');
  const path = `https://v2.jokeapi.dev/joke/${category}?type=single&amount=2`;
  dispatch(getJokeStart());
  try {
    const res = await Axios.get(path);
    console.log(res.data.jokes, 'res');
    dispatch(getJokeSuccess(res.data.jokes));
    return res.data.jokes;
  } catch (err) {
    dispatch(getJokeFailed());
    console.log(err, 'err');
  }
};
