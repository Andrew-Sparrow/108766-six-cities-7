import React from 'react';
import PropTypes from 'prop-types';

function PlaceGood(props) {
  const {good} = props;

  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

PlaceGood.propTypes = {
  good: PropTypes.string,
};

export default PlaceGood;
