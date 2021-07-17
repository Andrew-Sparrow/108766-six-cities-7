import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';
import { sendComment } from '../../store/api-actions';

function PropertyCommentForm(props) {
  const { onSubmit } = props;
  const MAX_LETTERS_AMOUNT = 300;
  const MIN_LETTERS_AMOUNT = 50;

  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  const isSubmitButtonDisabled = commentText.length < MIN_LETTERS_AMOUNT || commentText.length > MAX_LETTERS_AMOUNT || !rating;

  const changeCommentHandler = (evt) => {
    evt.preventDefault();
    setCommentText(evt.target.value);
  };

  const changeRatingHandler = (evt) => {
    evt.preventDefault();
    setRating(evt.target.defaultValue);
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(id, commentText, rating);
  };

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={(evt) => { onSubmitHandler(evt); }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={(evt) => {changeRatingHandler(evt);}}>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={(evt) => changeCommentHandler(evt)} value={commentText} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ isSubmitButtonDisabled }>Submit</button>
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(idHotel, text, hotelRating) {
    dispatch(sendComment(idHotel, text, hotelRating));
  },
});

PropertyCommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { PropertyCommentForm };
export default connect(null, mapDispatchToProps)(PropertyCommentForm);
