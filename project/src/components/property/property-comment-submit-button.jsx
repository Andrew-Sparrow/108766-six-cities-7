import React from 'react';
import PropTypes from 'prop-types';

function PropertyCommentSubmitButton (props) {
  const {disabled} = props;
  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={disabled}
    >
      Submit
    </button>
  );
}
PropertyCommentSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default PropertyCommentSubmitButton;
