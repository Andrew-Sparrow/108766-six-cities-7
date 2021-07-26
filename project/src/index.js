import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import browserHistory from './browser-history';
import {getAxiosInstance} from './services/api';
import App from './components/app/app';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';

import {fetchPlacesList} from './store/api-actions';

const api = getAxiosInstance(browserHistory);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchPlacesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
