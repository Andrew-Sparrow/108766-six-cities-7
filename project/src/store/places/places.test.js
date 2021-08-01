import {SortByValues} from '../../const';
import {
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
  removeNearbyPlaces,
  changeFavorite,
  resetFavorites
} from '../actions';

import {offers as mockPlaces} from '../../mock/places';

const initialState = {
  places: [],
  sortBy: SortByValues.POPULAR,
  isDataLoaded: false,
  activeCityName: 'Paris',
  isNearbyPlacesLoaded: false,
  nearbyPlaces: [],
};

describe('Reducer: comment', () => {
  it('without additional parameters should return initial state', () => {
    expect(changeCity(undefined, {})).toEqual(initialState);
  });
});
