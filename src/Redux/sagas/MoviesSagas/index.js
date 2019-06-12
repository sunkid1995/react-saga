// Actions type
import { MOVIES } from '../../types';

// Saga effects
import { takeLatest, put, delay } from 'redux-saga/effects';

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

function* addNewMovies(action) {
  const { newMovie } = action;

  try {
    const movies = yield API.postMoviesFromFakeAPI(newMovie);

    yield delay(2000);
    if (movies) yield put({ type: MOVIES.GET_MOVIES });

  } catch (error) {
    // do nothing
  }
}

// saga dispatch
export function* watchFetchMovies() {
  yield takeLatest(MOVIES.GET_MOVIES, fetchMovies);
}

export function* watchAddMovies() {
  yield takeLatest(MOVIES.ADD_MOVIES, addNewMovies);
}