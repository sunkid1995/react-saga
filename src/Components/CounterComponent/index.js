import React from 'react';

// Connect redux
import ContainerCounter from '../../Containers/CounterContainer';

class CounterComponent extends React.Component {
  render () {
    const { total, onDecement, onIncement } = this.props;

    return (
      <React.Fragment>
        <h3>{'Demo counter'}</h3>
        <button
          style={btnStyles}
          onClick={() => onDecement(parseInt(total) + 1)}
        >
          {'+ Decrement'}
        </button>
          <span>{total}</span>
        <button
         style={btnStyles}
         onClick={() => onIncement(parseInt(total) - 1)}
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
