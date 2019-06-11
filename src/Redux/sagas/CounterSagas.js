// Saga
import { takeEvery } from 'redux-saga/effects';

// Actions
import { COUNTER } from '../types';

function increment() {
  console.log('watchIncrement - increment');
}

function decrement() {
  console.log('watchDecrement - decrement');
}

export function* watchIncrement() {
 yield takeEvery(COUNTER.INCREMENT, increment);
}

export function* watchDecrement() {
  yield takeEvery(COUNTER.DECREMENT, decrement);
}
