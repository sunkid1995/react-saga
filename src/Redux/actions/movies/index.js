// Actions type
import { MOVIES } from '../../types';

// Init action
export function getMovies(sort) {
  return {
    type: MOVIES.GET_MOVIES,
    sort,
  }
}

export function addMovie(newMovie) {
  return {
    type: MOVIES.ADD_MOVIES,
    newMovie,
  }
}

// Redux saga dispatch action
// export function getMoviesSuccess(payload) {
//   return {
//     type: MOVIES.GET_MOVIES_SUCCESS,
//     movies: payload,
//   }
// }

// export function getMoviesFailed(payload) {
//   return {
//     type: MOVIES.GET_MOVIES_FAILED,
//     error: payload,
//   }
// }
