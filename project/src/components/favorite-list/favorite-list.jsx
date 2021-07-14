import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCity from '../favorite-city/favorite-city';
import offerProp from '../room/room.prop.js';

function FavoriteList(props) {
  const { favoriteList } = props;

  function getPlaces(list) {
    const cityList = [];

    list.forEach((place, city) => {
      cityList.push(<FavoriteCity city={city} favoritePlaces={place} key={place.city}/>);
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
  favoriteList: PropTypes.arrayOf(offerProp),
};

export default FavoriteList;
