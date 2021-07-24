import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import {
//   useHistory
//   // useParams
// } from 'react-router-dom';

// import {
//   AuthorizationStatus,
//   AppRoute
// } from '../../const.js';

// import RoomProp from '../room/room.prop.js';

import {
  addToFavorite
} from '../../store/api-actions';

function PropertyFavoriteButton ( props ) {
  const {
    adaptedPlaceForClient,
    // places,
    // authorizationStatus,
    // favoriteClickHandler,
    onFavoriteClick,
  } = props;

  // eslint-disable-next-line
  //  console.log(places);

  // const { id } = useParams();

  // const history = useHistory();

  // const adaptedPlaceForClient = places.find((place) => place.id === +id);

  // const onFavoriteClick = (evt) => {
  //   evt.preventDefault();
  //   if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
  //     history.push(AppRoute.LOGIN);
  //   } else {
  //     favoriteClickHandler(adaptedPlaceForClient.id, !adaptedPlaceForClient.isFavorite);
  //   }
  // };

  return (
    <button
      className={`property__bookmark-button button ${adaptedPlaceForClient.isFavorite ? 'property__bookmark-button--active' : ''}`}
      type="button"
      onClick={(evt) => { onFavoriteClick(evt); }}
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

const mapStateToProps = (state) => ({
  places: state.places,
  authorizationStatus: state.authorizationStatus,
});

PropertyFavoriteButton.propTypes = {
  // places: PropTypes.array,
  adaptedPlaceForClient: PropTypes.object,
  onFavoriteClick: PropTypes.func.isRequired,
  // authorizationStatus: PropTypes.string.isRequired,
  // favoriteClickHandler: PropTypes.func,
};

export { PropertyFavoriteButton };
export default connect(mapStateToProps, mapDispatchToProps)(PropertyFavoriteButton);
