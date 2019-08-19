import { all } from 'redux-saga/effects';

// saga
import { watchIncrement, watchDecrement } from './CounterSagas';

export default function* rootSaga() {

  yield all([
    watchIncrement(),
    watchDecrement(),
  ]);
}