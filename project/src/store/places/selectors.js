import {NameSpace} from '../root-reducer';

export const getPlaces = (state) => state[NameSpace.PLACES].places;
export const getSortBy = (state) => state[NameSpace.PLACES].sortBy;
export const getIsDataLoaded = (state) => state[NameSpace.PLACES].isDataLoaded;
export const getActiveCityName = (state) => state[NameSpace.PLACES].activeCityName;
export const getIsNearbyPlacesLoaded = (state) => state[NameSpace.PLACES].isNearbyPlacesLoaded;
export const getNearbyPlaces = (state) => state[NameSpace.PLACES].nearbyPlaces;
