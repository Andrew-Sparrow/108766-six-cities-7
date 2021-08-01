import {places} from './places';
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
    const initialPlace = {
      'id': 1,
      'price': 220,
      'bedrooms': 3,
      'type': 'apartment',
      'title': 'Beautiful & luxurious studio at great location',
      'city': {
        'name': 'Amsterdam',
        'location': {},
      },
      'description': 'A qu unique lightness of Amsterdam.',
      'goods': [],
      'host': {},
      'images': ['img/1.png', 'img/2.png'],
      'isFavorite': true,
      'isPremium': true,
      'location': {},
      'maxAdults': 4,
      'previewImage': 'img/1.png',
      'rating': 4.0,
    };

    const placeFromServer = {
      'id': 1,
      'price': 2200,
      'bedrooms': 5,
      'type': 'apartment',
      'title': 'Beautiful & luxurious studio at great location',
      'city': {
        'name': 'Amsterdam',
        'location': {},
      },
      'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'goods': [],
      'host': {
        'id': 3,
        'avatar_url': 'img/avatar-angelina.jpg',
        'is_pro': true,
        'name': 'Angelina',
      },
      'images': [],
      'is_favorite': false,
      'is_premium': true,
      'location': {},
      'max_adults': 40,
      'preview_image': 'img/1.png',
      'rating': 0.5,
    };

    const oldPlaces = [initialPlace];
    const oldState = Object.assign({}, initialState, {places: oldPlaces});

    const newPlace = Object.assign({}, initialPlace, {isFavorite: false});
    const newPlaces = [newPlace];
    const newState = Object.assign({}, initialState, {places: newPlaces});

    const changeFavoriteAction = changeFavorite(1, placeFromServer);

    expect(places(oldState, changeFavoriteAction)).toEqual(newState);
  });

  it('should reset all favorites', () => {
    const initialPlace = {
      'id': 1,
      'price': 220,
      'bedrooms': 3,
      'type': 'apartment',
      'title': 'Beautiful & luxurious studio at great location',
      'city': {
        'name': 'Amsterdam',
        'location': {},
      },
      'description': 'A qu unique lightness of Amsterdam.',
      'goods': [],
      'host': {},
      'images': ['img/1.png', 'img/2.png'],
      'isFavorite': true,
      'isPremium': true,
      'location': {},
      'maxAdults': 4,
      'previewImage': 'img/1.png',
      'rating': 4.0,
    };

    const oldPlaces = [initialPlace];

    const oldState = Object.assign({}, initialState, {places: oldPlaces});

    const newPlaces = [(Object.assign({}, initialPlace, {isFavorite: false}))];

    const newState = Object.assign({}, initialState, {places: newPlaces});

    const changeFavoriteAction = resetFavorites(oldPlaces);
    expect(places(oldState, changeFavoriteAction)).toEqual(newState);
  });
});
