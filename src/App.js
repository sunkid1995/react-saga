import React from 'react';

// Components
import CounterComponent from './Components/CounterComponent';
import PeopleComponent from './Components/PeopleComponent';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <h1>{'ReactJS - Saga'}</h1>
        <hr />
        <CounterComponent />

        <hr />
        <PeopleComponent />
      </div>
    );
  }
}
