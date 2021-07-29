import {createReducer} from '@reduxjs/toolkit';
import {SortByValues} from '../../const';
import Util from '../../util/util';

import {
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
  removeNearbyPlaces,
  changeFavorite,
  resetFavorites
} from '../actions';

const initialState = {
  places: [],
  sortBy: SortByValues.POPULAR,
  isDataLoaded: false,
  activeCityName: 'Paris',
  isNearbyPlacesLoaded: false,
  nearbyPlaces: [],
};

const places = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCityName = action.payload;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload;
    })
    .addCase(loadPlaces, (state, action) => {
      state.places = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyPlaces, (state, action) => {
      state.nearbyPlaces = action.payload;
      state.isNearbyPlacesLoaded = true;
    })
    .addCase(removeNearbyPlaces, (state) => {
      state.nearbyPlaces = [];
      state.isNearbyPlacesLoaded = false;
    })
    .addCase(changeFavorite, (state, action) => {
      state.places = Util.getUpdatedPlaces(action.payload.id, state.places, action.payload.newPlace);
    })
    .addCase(resetFavorites, (state, action) => {
      state.places = Util.resetFavoriteStates(action.payload);
    });
});

export {places};
