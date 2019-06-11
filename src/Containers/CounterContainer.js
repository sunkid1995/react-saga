// Connect redux with components
import { connect } from 'react-redux';

// Redux actions
import { counter } from '../Redux/actions';

function mapStateToProps(state) {
  return {
    // total: state.counter.total ? state.counter.total : 0,
    total: state.counterReducer ? state.counter.total : 0,
  }
}

function mapDispatchToProps(dispatch) {
 return {
    onDecement: step => dispatch(counter.onDecement(step)),
    onIncement: step => dispatch(counter.onIncement(step))
  }
}

// Connect
export default function CounterContainer(HOC) {
 return connect(mapStateToProps, mapDispatchToProps)(HOC);
}
