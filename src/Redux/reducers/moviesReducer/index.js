// Actions type
import { MOVIES } from '../../types';

// Init State
const INITIAL_STATE = {
  movies: [],
  error: {},
}

function moviesReducer(state = INITIAL_STATE, action) {
  console.log('action moviesReducer', action);

  switch(action.type) {
    case MOVIES.GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies }

    case MOVIES.GET_MOVIES_FAILED:
      return { ...state, error: action.error }

    // case MOVIES.ADD_MOVIES:
    //   return { ...state, movies: [ ...state.movies, action.newMovie ]}

    default:
    return state;
  }
}

export default moviesReducer;