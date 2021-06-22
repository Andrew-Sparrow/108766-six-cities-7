import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.js';

function Room(props) {
  const {
    price,
    onListItemHover,
    id,
    title,
  } = props;

  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.currentTarget);
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={listItemHoverHandler} id={id}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.PROPERTY}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.PROPERTY}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

Room.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
  onListItemHover: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Room;
