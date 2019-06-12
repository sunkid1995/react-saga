// Actions type
import { MOVIES } from '../../types';

// Saga effects
import { takeLatest, put } from 'redux-saga/effects';

// Fake api
import { API } from './API';

function* fetchMovies() {
  try {
      const movies = yield API.getMoviesFromFakeAPI();

      // dispatch action
      yield put({ type: MOVIES.GET_MOVIES_SUCCESS, movies });
  } catch (error) {

    // dispatch action
    yield put({ type: MOVIES.GET_MOVIES_FAILED, error });
  }
}

// saga dispatch
export function* watchFetchMovies() {
  yield takeLatest(MOVIES.GET_MOVIES, fetchMovies);
}