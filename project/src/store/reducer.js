import {ActionType} from './action';

const initialState = {
  city: 'Paris',
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      const city = state.city;

      return {
        ...state,
        city: city,
      };
    }
    default:
      return state;
  }
}

export { reducer };
