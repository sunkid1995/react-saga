// Actions type
import { MOVIES } from '../../types';

// Init action
export function getMovies(sort) {
  return {
    type: MOVIES.GET_MOVIES,
    sort,
  }
}

// Redux saga dispatch action
// export function getMoviesSuccess(payload) {
//   console.log(payload, 'payload');
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
