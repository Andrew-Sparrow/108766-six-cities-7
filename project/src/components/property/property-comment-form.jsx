import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';
import { sendComment } from '../../store/api-actions';
import PropertyCommentSubmitButton from './property-comment-submit-button';

function PropertyCommentForm(props) {
  const { onSubmit } = props;

  const MAX_LETTERS_AMOUNT = 300;
  const MIN_LETTERS_AMOUNT = 50;

  // const RatingValues = {
  //   PERFECT: 5,
  //   GOOD: 4,
  //   NOT_BAD: 3,
  //   BADLY: 2,
  //   TERRIBLY: 1,
  // };

  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  // eslint-disable-next-line
  console.log(rating);

  const { id } = useParams();

  const isSubmitButtonDisabled = (commentText.length < MIN_LETTERS_AMOUNT) || (commentText.length > MAX_LETTERS_AMOUNT) || (rating === 0);

  const onChangeCommentHandler = (evt) => {
    setCommentText(evt.target.value);
  };

  const onChangeRatingHandler = (evt) => {
    setRating(evt.target.defaultValue);
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(id, commentText, rating);
    setCommentText('');
    setRating(0);
  };

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={(evt) => { onSubmitHandler(evt); }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {/* <div className="reviews__rating-form form__rating" > */}
      <div className="reviews__rating-form form__rating" onChange={onChangeRatingHandler}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          // onChange={(evt) => { onChangeRatingHandler(evt); }}
          // checked={ rating === RatingValues.PERFECT }
          defaultChecked={ false }
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          // onChange={(evt) => { onChangeRatingHandler(evt); }}
          // checked={ rating === RatingValues.GOOD }
          defaultChecked={ false }
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          // onChange={(evt) => { onChangeRatingHandler(evt); }}
          // checked={ rating === RatingValues.NOT_BAD }
          defaultChecked={ false }
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          // onChange={(evt) => { onChangeRatingHandler(evt); }}
          // checked={ rating === RatingValues.BADLY }
          defaultChecked={ false }
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          // onChange={(evt) => { onChangeRatingHandler(evt); }}
          // checked={ rating === RatingValues.TERRIBLY }
          defaultChecked={ false }
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={(evt) => onChangeCommentHandler(evt)}
        value={commentText}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <PropertyCommentSubmitButton disabled={isSubmitButtonDisabled}/>
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
