import React from 'react';
import PropTypes from 'prop-types';

import PropertyNearPlace from './property-near-place';

function PropertyNearPlacesList(props) {
  const { nearbyPlaces } = props;

  return (
    <div className="near-places__list places__list">
      {nearbyPlaces.map((place) => (
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

PropertyNearPlacesList.propTypes = {
  nearbyPlaces: PropTypes.array,
};

export default PropertyNearPlacesList;
