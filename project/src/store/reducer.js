import { ActionType } from './action';

const initialState = {
  activeCityName: 'Paris',
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
    default:
      return state;
  }
}

export { reducer };
