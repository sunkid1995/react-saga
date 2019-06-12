import React from 'react';

// Connect redux
import MoviesContainer from '../../Containers/MoviesContainer';

class MoviesComponent extends React.Component {
  render() {
    const { getMovies, movies } = this.props;

    return (
      <React.Fragment>
        <h1>{'Saga MoviesComponent'}</h1>
        <button
          onClick={() => getMovies()}
        >
          {'Get movies'}
        </button>

        <div>
          {movies &&
            movies.map((item, index) => (
              <React.Fragment key={`movies-${index}`}>
                <p>{`Name movies: ${item.movies_name}`}</p>
                <p>{`Relesea: ${item.release_year}`} </p>
              </React.Fragment>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default MoviesContainer(MoviesComponent);
