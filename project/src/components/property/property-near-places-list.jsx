import React from 'react';

import Utils from '../../utils/utils';
import PropertyNearPlace from './property-near-place';

import { neighbourhoodPlaces } from '../../mock/neighbourhood-places';

function PropertyNearPlacesList() {
  const adaptedPlacesToClient = neighbourhoodPlaces.map((place) => Utils.adaptToClient(place));

  return (
    <div className="near-places__list places__list">
      {adaptedPlacesToClient.map((place) => (
        <PropertyNearPlace
          key={place.id}
          id={place.id}
          price={place.price}
          title={place.title}
          isPremium={place.isPremium}
          isFavorite={place.isFavorite}
          type={place.type}
          previewImage={place.previewImage}
        />
      ))}
    </div>
  );
}

export default PropertyNearPlacesList;
