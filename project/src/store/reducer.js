import { ActionType } from './action';
import { AuthorizationStatus } from '../const';

const initialState = {
  activeCityName: 'Paris',
  places: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCityName: action.payload,
      };
    }
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
}

export { reducer };
