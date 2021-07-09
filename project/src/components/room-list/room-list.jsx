import PropTypes from 'prop-types';
import React from 'react';

import Utils from '../../utils/utils';
import Room from '../room/room';
import placeProp from '../room/room.prop';

function RoomList(props)
{
  const { places, onListItemHover } = props;
  const adaptedPlacesToClient = places.map((place) => Utils.adaptToClient(place));

  return (
    <div className="cities__places-list places__list tabs__content">
      {adaptedPlacesToClient.map((place) => (
        <Room
          key={place.id}
          price={place.price}
          onListItemHover={onListItemHover}
          id={place.id}
          title={place.title}
          isPremium={place.isPremium}
          isFavorite={place.isFavorite}
          type={place.type}
          rating={place.rating}
        />
      ))}
    </div>
  );
}

RoomList.propTypes = {
  places: PropTypes.arrayOf(placeProp),
  onListItemHover: PropTypes.func,
};

export default RoomList;
