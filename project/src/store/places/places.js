import { ActionType } from '../actions';

import { SortByValues } from '../..const';

const initialState = {
  places: [],
  sortBy: SortByValues.POPULAR,
  isDataLoaded: false,
  activeCityName: 'Paris',
  isNearbyPlacesLoaded: false,
  nearbyPlaces: [],
};

const places = (state = initialState, action) => {
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
    case ActionType.LOAD_NEARBY_PLACES:
      return {
        ...state,
        nearbyPlaces: action.payload,
        isNearbyPlacesLoaded: true,
      };
    case ActionType.REMOVE_NEARBY_PLACES:
      return {
        ...state,
        nearbyPlaces: [],
        isNearbyPlacesLoaded: false,
      };
    default:
      return state;
  }
};

export { places };
