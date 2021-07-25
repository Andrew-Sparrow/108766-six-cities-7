import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../../utils/utils';

import PlaceNearPlace from './place-near-place';

function PlaceNearPlaceList(props) {
  const { nearbyPlaces, commonPlaces } = props;

  const commonPlacesLinksGottenByNearbyPlaces = Utils.getNearbyPlacesFromCommonPlaces(nearbyPlaces, commonPlaces);

  return (
    <div className="near-places__list places__list">
      {commonPlacesLinksGottenByNearbyPlaces.map((place) => (
        <PlaceNearPlace
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

PlaceNearPlaceList.propTypes = {
  nearbyPlaces: PropTypes.array,
  commonPlaces: PropTypes.array,
};

export default PlaceNearPlaceList;
