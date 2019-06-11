import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store
import store from './Redux/store';

// Provider
import { Provider } from 'react-redux';

const RenderApp = () => (
  // Connect Redux store
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<RenderApp />, document.getElementById('root'));
serviceWorker.unregister();
