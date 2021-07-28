import PropTypes from 'prop-types';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {addToFavorite} from '../../store/api-actions';
import Util from '../../util/util';
import CardInfo from '../card-info/card-info';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

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

  const history = useHistory();
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const width = Util.getWidthByRating(rating);

  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.currentTarget);
  };

  const onFavoriteClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    } else {
      dispatch(addToFavorite(id, !isFavorite));
    }
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
        onFavoriteClick={onFavoriteClick}
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
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string,
  previewImage: PropTypes.string,
  rating: PropTypes.number,
};

export default Room;
