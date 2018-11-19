import { put, takeLatest, call } from "redux-saga/effects";
import {
  setData,
  stopLoading,
  loadingFailure,
  constants
} from "../reduxStuff/actions";


function fetchPersons(url) {
  return fetch(url)
    .then(response => response.json());
}

function* workerSaga() {
  let url = "https://swapi.co/api/people/";
  try {
    while (url) {
      const response = yield call(fetchPersons, url);
      const { results, next } = response;
      yield put(setData(results));
      url = next;
    }
    yield put(stopLoading());
  } catch (error) {
    yield put(loadingFailure(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(constants.START_LOADING, workerSaga);
}
