import { ActionType } from './action';
import {
  AuthorizationStatus,
  SortByValues,
  LoginValue
} from '../const';

const initialState = {
  activeCityName: 'Paris',
  places: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  sortBy: SortByValues.POPULAR,
  login: LoginValue.UNAUTHORIZED,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCityName: action.payload,
      };
    }
    case ActionType.CHANGE_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
        isDataLoaded: true,
      };
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
        login: LoginValue.UNAUTHORIZED,
      };
    default:
      return state;
  }
}

export { reducer };
