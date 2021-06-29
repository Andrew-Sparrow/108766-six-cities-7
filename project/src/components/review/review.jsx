import React from 'react';
import PropTypes from 'prop-types';

function Review ( props ) {
  const { avatarImgPath, date, text } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ avatarImgPath } width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          Max
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>April 2019</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  avatarImgPath: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Review;
