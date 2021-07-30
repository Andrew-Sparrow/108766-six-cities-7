import {createReducer} from '@reduxjs/toolkit';

import {
  changeAuthorizationStatus,
  changeLogin,
  logout
} from '../actions';

import {AuthorizationStatus, LoginValue} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: LoginValue.UNAUTHORIZED,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.login = LoginValue.UNAUTHORIZED;
    });
});

export {user};
