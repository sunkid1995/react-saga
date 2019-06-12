import React from 'react';

// Connect redux
import MoviesContainer from '../../Containers/MoviesContainer';

class MoviesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      year: null,
    }
  }

  render() {
    const { getMovies, addMovie, movies } = this.props;

    console.log('props', this.props);

    return (
      <div>
        <h1>{'Saga MoviesComponent'}</h1>
        <button
          onClick={() => getMovies()}
        >
          {'Get movies'}
        </button>
        <div>
          <input placeholder="name" onChange={event => this.setState({ name: event.target.value})} />
          <input placeholder="year" onChange={event => this.setState({ year: event.target.value})} />
          <button
          onClick={() => {
            const { name, year } = this.state;
             addMovie({
              movies_name: name,
              release_year: year,
            })
          }}
          >
            {'add movies'}
          </button>
        </div>

        <div>
            {
              movies.map((item, index) => (
                <React.Fragment key={`movies-${index}`}>
                  <p>{`Name movies: ${item.movies_name}`}</p>
                  <p>{`Relesea: ${item.release_year}`} </p>
                  <hr />
                </React.Fragment>
              ))
            }
        </div>
      </div>
    );
  }
}

export default MoviesContainer(MoviesComponent);
