import {
  all, call, put, takeEvery
} from 'redux-saga/effects';

import { api } from './api';

import { joinAction, sortDefaultAction, updateAction } from './ducks';

function* updateSearchId() {
  try {
    const { searchId } = yield call(() => fetch(api.getSearchId()).then((res) => res.json()));
    return searchId;
  } catch (error) {
  }
}

function* updateTickets(searchId) {
  try {
    const data = yield call(() => fetch(api.getTickets(searchId)).then((res) => res.json()));
    return data;
  } catch (error) {
  }
}

function* joinSaga() {
  const searchId = yield call(updateSearchId);
  let apiResponse = { stop: false };
  while (!apiResponse.stop) {
    apiResponse = yield call(updateTickets, searchId);
    if (apiResponse) {
      yield put(joinAction(apiResponse.tickets));
      yield put(sortDefaultAction());
    } else {
      apiResponse = { stop: false };
    }
  }
}

export function* watchJoinActions() {
  yield all([
    takeEvery(updateAction, joinSaga),
    joinSaga(),
  ]);
}