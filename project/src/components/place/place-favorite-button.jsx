import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToFavorite } from '../../store/api-actions';

function PlaceFavoriteButton(props) {
  const {
    place,
    onClick,
  } = props;

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

const mapDispatchToProps = (dispatch) => ({
  favoriteClickHandler(idPlace, isFavoritePlace) {
    dispatch(addToFavorite(idPlace, isFavoritePlace));
  },
});

const mapStateToProps = ({ USER, PLACES }) => ({
  places: PLACES.places,
  authorizationStatus: USER.authorizationStatus,
});

PlaceFavoriteButton.propTypes = {
  place: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export { PlaceFavoriteButton };
export default connect(mapStateToProps, mapDispatchToProps)(PlaceFavoriteButton);
