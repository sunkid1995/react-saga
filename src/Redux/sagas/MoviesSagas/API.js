// Fake data api
const data = [
  {
    movies_name: 'star war',
    release_year: 1997,
  },
  {
    movies_name: 'star war 1',
    release_year: 1997,
  },
  {
    movies_name: 'star war 2',
    release_year: 1997,
  }
];
const fakeGetData = () => data;

// Saga
function* getMoviesFromFakeAPI() {
  // call api server
  const response = yield fakeGetData();
  const movies = yield response ? response : [];
  return movies;
}

function* postMoviesFromFakeAPI(newMovies) {
  const { movies_name, release_year } = newMovies;

  let newData = data;

  yield newData.push({
      movies_name,
      release_year
  });

 return yield newData;
}

export const API = {
  getMoviesFromFakeAPI,
  postMoviesFromFakeAPI,
}
