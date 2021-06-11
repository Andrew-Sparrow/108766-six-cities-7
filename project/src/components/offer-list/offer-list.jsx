import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Room from '../room/room';
import offerProp from '../room/room.prop';

function OfferList({places})  {
  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <Room key={place.id} price={place.price} />)}
    </div>
  );
};

OfferList.propTypes = {
  places: PropTypes.arrayOf(offerProp)
};

export default OfferList;
