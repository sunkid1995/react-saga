// Connect redux with components
import { connect } from 'react-redux';

// Redux actions
import { movies } from '../Redux/actions';

function mapStateToProps(state) {
  const { movies, error } = state.moviesReducer;

  return {
    movies, error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: params => dispatch(movies.getMovies(params)),
  }
}

export default function MoviesContainer(HOC) {
  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}
