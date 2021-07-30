import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import {getAxiosInstance} from './services/api';
import browserHistory from './browser-history';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {fetchPlacesList} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = getAxiosInstance(browserHistory);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchPlacesList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
