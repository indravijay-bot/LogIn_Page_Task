import { put, call, takeEvery, select } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { setImages, setError } from "../actions";
import { IMAGES } from "../constants";
import { fetchImages } from "../api";
import history from '../../history'
export const getPage = (state) => state.nextPage;

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  //  history.push("/apiCall")
   
  } catch (error) {
    yield put(setError(error.toString()));
  }
}
