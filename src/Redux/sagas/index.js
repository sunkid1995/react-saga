import { all } from 'redux-saga/effects';

// saga
import { watchIncrement, watchDecrement } from './CounterSagas';
import { watchFetchMovies } from './MoviesSagas';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchFetchMovies(),
  ]);
}