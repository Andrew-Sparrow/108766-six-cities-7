import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCity from '../favorite-city/favorite-city';

function FavoriteList(props) {
  const { favoriteList } = props;

  return (
    <ul className="favorites__list">
      {[...favoriteList.keys()].map((city) => (<FavoriteCity city={city} favoritePlaces={favoriteList.get(city)} key={city}/>))}
    </ul>
  );
}

FavoriteList.propTypes = {
  favoriteList: PropTypes.instanceOf(Map),
};

export default FavoriteList;
