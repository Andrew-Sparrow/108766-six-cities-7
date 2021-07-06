import React from 'react';
import PropTypes from 'prop-types';

function PropertyGood (props) {
  const { good } = props;

  return (
    <li className="property__inside-item">
      { good }
    </li>
  );
}

PropertyGood.propTypes = {
  good: PropTypes.string,
};

export default PropertyGood;
