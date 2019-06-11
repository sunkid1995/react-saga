import { COUNTER } from '../../types';


// Init action
export function onDecement(step) {
  return {
    type: COUNTER.DECREMENT,
    step,
  }
}

export function onIncement(step) {
  return {
    type: COUNTER.INCREMENT,
    step,
  }
}