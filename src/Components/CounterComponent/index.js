import React from 'react';

// Connect redux
import ContainerCounter from '../../Containers/CounterContainer';

class CounterComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h3>{'Demo counter'}</h3>
        <button
          style={btnStyles}
        >
          {'+ Decrement'}
        </button>

          <span>1</span>
        <button
         style={btnStyles}
        >
          {'- Increment'}
        </button>
      </React.Fragment>
    );
  }
}

const btnStyles = {
  margin: '10px',
  width: '100px',
  height: '35px',
  color: 'white',
  background: 'black',
}

export default ContainerCounter(CounterComponent);
// export default CounterComponent;