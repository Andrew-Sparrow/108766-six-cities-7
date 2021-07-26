import {ActionType} from '../actions';
import {
  AuthorizationStatus,
  LoginValue
} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: LoginValue.UNAUTHORIZED,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {user};
