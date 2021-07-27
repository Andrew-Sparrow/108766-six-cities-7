import React from 'react';
import PropTypes from 'prop-types';

function PlaceFavoriteButton(props) {
  const {place, onClick} = props;

  return (
    <button
      className={`property__bookmark-button button ${ place.isFavorite ? 'property__bookmark-button--active' : '' }`}
      type="button"
      onClick={onClick}
    >
      <svg className="property__bookmark-icon" width={31} height={33}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

PlaceFavoriteButton.propTypes = {
  place: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default PlaceFavoriteButton;
