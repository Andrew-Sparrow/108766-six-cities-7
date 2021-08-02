import {user} from './user';

import {
  ActionType
  // changeLogin,
  // logout
} from '../actions';

import {
  AuthorizationStatus,
  LoginValue
} from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: LoginValue.UNAUTHORIZED,
    };

    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: LoginValue.UNAUTHORIZED,
    };

    const newState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: LoginValue.UNAUTHORIZED,
    };

    const changeAuthorizationStatus = {
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(initialState, changeAuthorizationStatus))
      .toEqual(newState);
  });

  it('should update login', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: LoginValue.UNAUTHORIZED,
    };

    const changeLogin = {
      type: ActionType.CHANGE_LOGIN,
      payload: 'login@gmail.com',
    };

    const newState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: 'login@gmail.com',
    };

    expect(user(initialState, changeLogin)).toEqual(newState);
  });

  it('should update login after logout', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: 'login@gmail.com',
    };

    const logout = {type: ActionType.LOGOUT};

    const newState = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: LoginValue.UNAUTHORIZED,
    };

    expect(user(initialState, logout)).toEqual(newState);
  });
});
