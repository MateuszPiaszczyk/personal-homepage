import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./personalHompageApi";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./personalHompageSlice";

const loadingDelay = 1500;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = call(getRepositories, username);
    yield PushSubscription(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHompageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
