import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store
import configureStore from './Redux/store';

// Provider
import { Provider } from 'react-redux';

// Root saga
import rootSaga from './Redux/sagas';

const RenderApp = () => {
  const store = configureStore();

  // Runner saga
  store.runSaga(rootSaga);

  // Connect Redux store
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<RenderApp />, document.getElementById('root'));
serviceWorker.unregister();
