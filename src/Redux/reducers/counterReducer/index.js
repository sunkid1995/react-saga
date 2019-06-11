// Actions type
import { COUNTER } from '../../types';

// Init State
const INITIAL_STATE = {
  total: 0,
}

function counterReducer (state =  INITIAL_STATE, action) {
  console.log(action, 'ah');
  switch (action.type) {
    case COUNTER.DECREMENT:
      return { ...state, total: action.step }

    case COUNTER.INCREMENT:
    return { ...state, total: action.step < 0 ? 0 : action.step }
    default:
      return state;
  }
}

export default counterReducer;
