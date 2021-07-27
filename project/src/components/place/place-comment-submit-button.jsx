import React from 'react';
import PropTypes from 'prop-types';

function PlaceCommentSubmitButton(props) {
  const {disabled, isSending} = props;

  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={disabled}
    >
      {isSending ? 'Sending ...' : 'Submit'}
    </button>
  );
}
PlaceCommentSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default PlaceCommentSubmitButton;
