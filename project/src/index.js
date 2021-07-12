import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import browserHistory from './browser-history';

import {
  getAxiosInstance
} from './services/api';

import App from './components/app/app';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';

import {
  fetchPlacesList
} from './store/api-actions';

const api = getAxiosInstance(browserHistory);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchPlacesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
