// Connect redux with components
import { connect } from 'react-redux';

// Component
import CounterComponent from '../Components/CounterComponent';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
 return {

  }
}

// Connect
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default CounterContainer;
