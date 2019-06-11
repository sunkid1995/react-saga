import { createStore, combineReducers } from 'redux';

// Reducers
import { counterReducer } from '../reducers'

// CombineReducers
const allReducer = combineReducers({
  counterReducer,
});

// Create store
let store = createStore(allReducer);

export default store;
