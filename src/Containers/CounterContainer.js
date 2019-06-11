// Connect redux with components
import { connect } from 'react-redux';

// Component
import CounterComponent from '../Components/CounterComponent';

// Redux actions
import { counter } from '../Redux/actions';

function mapStateToProps(state) {
  console.log('state', state);
  return {
    total: state.counter.total ? state.counter.total : 0,
  }
}

function mapDispatchToProps(dispatch) {
 return {
    onDecement: step => dispatch(counter.onDecement(step)),
    onIncement: step => dispatch(counter.onIncement(step))
  }
}

// Connect
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default CounterContainer;
