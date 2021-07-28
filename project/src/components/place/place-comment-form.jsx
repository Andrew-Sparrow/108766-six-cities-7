import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import {useParams} from 'react-router-dom';

import {sendComment} from '../../store/api-actions';
import {showErrorCommentFormMessage} from '../../store/actions';
import PlaceCommentSubmitButton from './place-comment-submit-button';
import PlaceRatingStar from './place-rating-star';
import {MAX_RATING} from '../../const';
import Util from '../../util/util';

import {
  getIsCommentSending,
  getIsCommentFormSendedSuccessfully,
  getIsShowCommentErrorMessage,
  getCommentErrorMessage
} from '../../store/comment/selectors';

function PlaceCommentForm(props) {
  const isCommentSending = useSelector(getIsCommentSending);
  const isShowCommentErrorMessage = useSelector(getIsShowCommentErrorMessage);
  const isCommentFormSendedSuccessfully = useSelector(getIsCommentFormSendedSuccessfully);
  const commentErrorMessage = useSelector(getCommentErrorMessage);

  const MAX_LETTERS_AMOUNT = 300;
  const MIN_LETTERS_AMOUNT = 50;

  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const {id} = useParams();

  const isSubmitButtonDisabled =
    (commentText.length < MIN_LETTERS_AMOUNT)
    || (commentText.length > MAX_LETTERS_AMOUNT)
    || (rating === 0);

  const generatedKeys = Util.generateIdKeys(MAX_RATING);

  const handleChangeComment = (evt) => {
    setCommentText(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    setRating(+evt.target.defaultValue);
  };

  const handleFocusChange = () => {
    if (isShowCommentErrorMessage) {
      dispatch(showErrorCommentFormMessage(false));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(id, commentText, rating));
  };

  useEffect(() => {
    if (isCommentFormSendedSuccessfully) {
      setCommentText('');
      setRating(0);
    }
  }, [isCommentSending, isCommentFormSendedSuccessfully]);

  return (
    <fieldset disabled={isCommentSending} style={{border: 'none'}}>
      <form
        className="reviews__form form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" onChange={handleChangeRating}>
          {generatedKeys.map((item, index) => <PlaceRatingStar key={item} index={index} rating={rating} />).reverse()}
        </div>
        <Tooltip
          overlay={<div style={{height: 100, width: 200, fontSize: 25, textAlign: 'center'}}>{commentErrorMessage}</div>}
          placement="top"
          visible={isShowCommentErrorMessage}
          animation="zoom"
        >
          <textarea
            className="reviews__textarea form__textarea"
            onChange={handleChangeComment}
            id="review"
            value={commentText}
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            onFocus={handleFocusChange}
          >
          </textarea>
        </Tooltip>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <PlaceCommentSubmitButton
            disabled={isSubmitButtonDisabled}
            isSending={isCommentSending}
          />
        </div>
      </form>
    </fieldset>
  );
}

export default PlaceCommentForm;
