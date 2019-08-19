import { createStore, combineReducers, applyMiddleware } from 'redux';

// Redux saga
import createSagaMiddleware from 'redux-saga';

// Reducers
import { counterReducer, peopleReducer } from '../reducers'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// CombineReducers
const allReducer = combineReducers({
  counterReducer,
  peopleReducer,
});

// Create store & apply saga middleware
function configureStore() {
  return {
    ...createStore(allReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  }
}

export default configureStore;
