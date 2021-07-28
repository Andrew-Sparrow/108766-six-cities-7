import PropTypes from 'prop-types';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import CardInfo from '../card-info/card-info';
import Utils from '../../utils/utils';
import {AuthorizationStatus, AppRoute} from '../../const';
import {addToFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';

function PlaceNearPlace(props) {
  const {
    id,
    price,
    title,
    isPremium,
    isFavorite,
    type,
    rating,
    previewImage,
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const width = Utils.getWidthByRating(rating);

  const favoriteClickHandler = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    } else {
      dispatch(addToFavorite(id, !isFavorite));
    }
  };

  return (
    <article className="near-places__card place-card" id={id}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${ id }`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <CardInfo
        id={id}
        price={price}
        title={title}
        isFavorite={isFavorite}
        type={type}
        width={width}
        favoriteClickHandler={favoriteClickHandler}
      />
    </article>
  );
}

PlaceNearPlace.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string,
  previewImage: PropTypes.string,
};

export default PlaceNearPlace;
