import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import CardInfo from '../card-info/card-info';

function PropertyNearPlace(props) {
  const {
    id,
    price,
    title,
    isPremium,
    isFavorite,
    type,
    previewImage,
  } = props;

  return (
    <article className="near-places__card place-card" id={id}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/hotels/${id}`}>
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place" />
        </Link>
      </div>
      < CardInfo
        price={price}
        title={title}
        isFavorite={isFavorite}
        type={type}
      />
    </article>
  );
}

PropertyNearPlace.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  type: PropTypes.string,
  previewImage: PropTypes.string,
};

export default PropertyNearPlace;
