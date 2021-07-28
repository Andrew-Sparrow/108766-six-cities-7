import {createReducer} from '@reduxjs/toolkit';
import {SortByValues} from '../../const';
import Utils from '../../util/util';

import {
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
  removeNearbyPlaces,
  changeFavorite
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
      state.places = Utils.getUpdatedPlaces(action.payload.id, state.places, action.payload.newPlace);
    });
});

export {places};
