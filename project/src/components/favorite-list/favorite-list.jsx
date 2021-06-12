import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils/utils';
import FavoriteCity from '../favorite-city/favorite-city';
import offerProp from '../room/room.prop.js';

function FavoriteList({ places }) {
  const favoriteList = Utils.getFavoritePlacesSeparatedByCity(places);

  function getPlaces(list) {
    const cityList = [];

     list.forEach((places, city) => {
      cityList.push(<FavoriteCity city={city} favoritePlaces={places} key={city}/>);
    });

    return cityList;
  }

  return (
    <ul className="favorites__list">
      {getPlaces(favoriteList)}
    </ul>
  );
}

FavoriteList.propTypes = {
  places: PropTypes.arrayOf(offerProp),
};

export default FavoriteList;
