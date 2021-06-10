import PropTypes from 'prop-types';
import React from 'react';
import Offer from '../offer/offer';
import offerProp from '../offer/offer.prop';

function OfferList({places})  {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <Offer key={place.id} price={place.price} />)}
    </div>
  );
};

OfferList.PropTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape(offerProp),
  ).isRequired,
};

export default OfferList;
