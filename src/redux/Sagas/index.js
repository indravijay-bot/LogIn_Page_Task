import { all, takeEvery, take, call } from "redux-saga/effects";
import { IMAGES, LOGIN } from "../constants";

import imagesSaga from "./imagesSaga";
import { handleImagesLoad } from "./imagesSaga";

function* rootSaga() {
  yield take(LOGIN.LOGIN);
  yield call(handleImagesLoad);
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
export default rootSaga;
