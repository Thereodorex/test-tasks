// import React from 'react';
// import {
//   all, call, fork, put,
// } from 'redux-saga/effects';

// import createSagaMiddleware from 'redux-saga'

// function* watchPollingTickets() {
//   while(true) {
//       const action = yield take('START_POLLING');
//       yield race([
//           call(poll, action),
//           take('STOP_POLLING')
//       ]);
//   }
// }