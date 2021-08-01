import {places} from './places';
import {SortByValues} from '../../const';
import {
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
  removeNearbyPlaces,
  changeFavorite
  // resetFavorites
} from '../actions';

import {offers as mockPlaces} from '../../mock/places';
import {placeHotel} from '../../mock/place-hotel';

const initialState = {
  places: [],
  sortBy: SortByValues.POPULAR,
  isDataLoaded: false,
  activeCityName: 'Paris',
  isNearbyPlacesLoaded: false,
  nearbyPlaces: [],
};

describe('Reducer: places', () => {
  it('without additional parameters should return initial state', () => {
    expect(places(undefined, {})).toEqual(initialState);
  });

  it('should change active city', () => {
    const newState = Object.assign(
      {},
      initialState,
      {activeCityName: 'Copenhagen'},
    );

    const changeCityAction = changeCity('Copenhagen');
    expect(places(initialState, changeCityAction)).toEqual(newState);
  });

  it('should change sortBy', () => {
    const newState = Object.assign(
      {},
      initialState,
      {sortBy: SortByValues.PRICE_HIGH_TO_LOW},
    );

    const changeSortByAction = changeSortBy(SortByValues.PRICE_HIGH_TO_LOW);
    expect(places(initialState, changeSortByAction)).toEqual(newState);
  });

  it('should add places', () => {
    const newState = Object.assign(
      {},
      initialState,
      {places: mockPlaces, isDataLoaded: true},
    );

    const changePlacesAction = loadPlaces(mockPlaces);
    expect(places(initialState, changePlacesAction)).toEqual(newState);
  });

  it('should add nearby places', () => {
    const newState = Object.assign(
      {},
      initialState,
      {nearbyPlaces: mockPlaces, isNearbyPlacesLoaded: true},
    );

    const changeNearbyPlacesAction = loadNearbyPlaces(mockPlaces);
    expect(places(initialState, changeNearbyPlacesAction)).toEqual(newState);
  });

  it('should remove nearby places', () => {
    const newState = Object.assign(
      {},
      initialState,
      {nearbyPlaces: [], isNearbyPlacesLoaded: false},
    );

    const changeNearbyPlacesAction = removeNearbyPlaces(mockPlaces);
    expect(places(initialState, changeNearbyPlacesAction)).toEqual(newState);
  });

  it('should change favorite', () => {
    const newPlace = Object.assign({}, placeHotel, {id: 1, isFavorite: true});

    const newState = Object.assign(
      {},
      initialState,
      {id: 1, newPlace},
    );

    const changeFavoriteAction = changeFavorite(1, newPlace);
    expect(places(initialState, changeFavoriteAction)).toEqual(newState);
  });
});
