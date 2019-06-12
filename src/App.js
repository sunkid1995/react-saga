import React from 'react';

// Components
import CounterComponent from './Components/CounterComponent';
import MoviesComponent from './Components/MoviesComponent';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <h1>{'ReactJS - Saga'}</h1>
        <hr />
        <CounterComponent />
        <hr />
        <MoviesComponent />
      </div>
    );
  }
}
