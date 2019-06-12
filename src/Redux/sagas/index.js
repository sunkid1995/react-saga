import { call, all, fork } from 'redux-saga/effects';

// saga
import { watchIncrement, watchDecrement } from './CounterSagas';
import { watchFetchMovies, watchAddMovies } from './MoviesSagas';

export default function* rootSaga() {

  yield all([
    watchIncrement(),
    watchDecrement(),
    watchFetchMovies(),
    watchAddMovies(),
  ]);
}