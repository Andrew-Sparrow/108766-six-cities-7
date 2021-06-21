import PropTypes from 'prop-types';
import React from 'react';
import Room from '../room/room';
import offerProp from '../room/room.prop';

function RoomList(props)  {
  const { places, onListItemHover } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => <Room key={place.id} price={place.price} onListItemHover={onListItemHover} id={place.id}/>)}
    </div>
  );
}

RoomList.propTypes = {
  places: PropTypes.arrayOf(offerProp),
  onListItemHover: PropTypes.func,
};

export default RoomList;
