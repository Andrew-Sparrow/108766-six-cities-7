import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

import {
  Link
} from 'react-router-dom';

import CardInfo from '../card-info/card-info';

function Room(props) {
  const {
    id,
    price,
    onListItemHover,
    title,
    isPremium,
    isFavorite,
    type,
    rating,
    previewImage,
  } = props;

  const width = Utils.getWidthByRating(rating);

  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.currentTarget);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={listItemHoverHandler}
      id={id}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/hotels/${id}`}>
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place" />
        </Link>
      </div>
      < CardInfo
        id={id}
        price={price}
        title={title}
        isFavorite={isFavorite}
        type={type}
        width={width}
      />
    </article>
  );
}

Room.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
  onListItemHover: PropTypes.func,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  type: PropTypes.string,
  previewImage: PropTypes.string,
  rating: PropTypes.number,
};

export default Room;
