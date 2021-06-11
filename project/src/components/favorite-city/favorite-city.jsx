import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritePlace from '../favorite-place/favorite-place';
import offerProp from '../room/room.prop.js';

function FavoriteCity({ city, favoritePlaces }) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritePlaces.map((place) => {
          return <FavoritePlace price={place.price} title={place.title} type={place.type} key={place.id} />
        })}
      </div>
    </li>);
}

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoritePlaces: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoriteCity;
