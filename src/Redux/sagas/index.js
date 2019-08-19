import { all, fork } from 'redux-saga/effects';

// saga
import { watchIncrement, watchDecrement } from './CounterSaga';
import { watchActionGetPeople, watchActionFilterPeople } from './PeopleSaga';

export default function* rootSaga() {
  // fork none-blocking
  yield all([
    fork(watchIncrement),
    fork(watchDecrement),
    fork(watchActionGetPeople),
    watchActionFilterPeople(),
  ]);
}