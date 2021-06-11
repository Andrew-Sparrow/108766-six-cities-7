import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Room from '../room/room';
import offerProp from '../room/room.prop';

function RoomList({places})  {
  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <Room key={place.id} price={place.price} />)}
    </div>
  );
};

RoomList.propTypes = {
  places: PropTypes.arrayOf(offerProp)
};

export default RoomList;
