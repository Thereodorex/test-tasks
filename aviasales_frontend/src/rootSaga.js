import { all, call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { join } from './actions/tickets';

function* updateToken() {
  // while (true) {
    try {
      const { searchId } = yield call(() => {
        return fetch('https://front-test.beta.aviasales.ru/search').then(res => res.json())
      })
      console.log(searchId);
      return searchId;
    } catch(error) {
      console.log('err');
      yield delay(2000);
    }
  // }
}

function* updateApi(token) {
  // while (true) {
    try {
      const data = yield call(() => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${token}`).then(res => res.json()));
      return data;
    } catch(error) {
      console.log('err');
      yield delay(2000);
    }
  // }
}

function* updateResource() {
  const token = yield call(updateToken);
  let apiResponse;
  do {
    apiResponse = yield call(updateApi, token);
    console.log(apiResponse);
    if (apiResponse) yield put(join(apiResponse.tickets));
    else apiResponse = {stop: false}
  } while (!apiResponse.stop);
}

export function* watchUpdateResource() {
  yield takeLatest('UPDATE_START', updateResource);
}


export function* rootSaga() {
  yield all([
    updateResource()
  ])
}