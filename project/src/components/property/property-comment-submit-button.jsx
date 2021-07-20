import React from 'react';
import PropTypes from 'prop-types';

function PropertyCommentSubmitButton (props) {
  const {
    disabled,
    isSending,
  } = props;

  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={ disabled }
    >
      { isSending ? 'Sending ...' : 'Submit' }
    </button>
  );
}
PropertyCommentSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
};

export default PropertyCommentSubmitButton;
