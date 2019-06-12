// Fake data api
const data = [
  {
    id: 1,
    movies_name: 'star war',
    release_year: 1997,
  },
  {
    id: 2,
    movies_name: 'star war 1',
    release_year: 1997,
  },
  {
    id: 3,
    movies_name: 'star war 2',
    release_year: 1997,
  }
];
const fakeGetData = () => data;

// Saga
function* getMoviesFromFakeAPI() {
  const response = yield fakeGetData();
  const movies = yield response ? response : [];
  return movies;
}

export const API = {
  getMoviesFromFakeAPI,
}
