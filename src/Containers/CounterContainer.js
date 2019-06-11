// Connect redux with components
import { connect } from 'react-redux';

// Redux actions
import { counter } from '../Redux/actions';

function mapStateToProps(state) {
  const { total } = state.counterReducer;

  return {
    total,
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
