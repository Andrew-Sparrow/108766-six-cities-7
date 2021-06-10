import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Offer from '../offer/offer';
import offerProp from '../offer/offer.prop';

function OfferList({places})  {
  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <Offer key={place.id} price={place.price} />)}
    </div>
  );
};

OfferList.propTypes = {
  places: PropTypes.arrayOf(offerProp)
};

export default OfferList;
