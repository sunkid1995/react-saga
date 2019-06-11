// Actions type
import { COUNTER } from '../../types';

// Init State
// const INITIAL_STATE = {
//   total: 0,
// }
// function counterReducer (state =  INITIAL_STATE, action) {
function counterReducer (total = 0, action) {
  switch (action.type) {
    case COUNTER.DECREMENT:
    return  ++total;

    case COUNTER.INCREMENT:
    return --total;

    default:
      break;
  }
}

export default counterReducer;
