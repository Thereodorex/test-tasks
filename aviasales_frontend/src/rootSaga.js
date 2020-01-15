import {
  all, fork,
} from 'redux-saga/effects';

import { watchJoinActions } from './features/tickets/sagas';

export function* rootSaga() {
  yield all([
    fork(watchJoinActions)
  ]);
}
