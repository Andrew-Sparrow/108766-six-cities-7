import React from 'react';
import PropTypes from 'prop-types';

function PlaceImage(props) {
  const {imgPath} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imgPath} alt="studio" />
    </div>
  );
}

PlaceImage.propTypes = {
  imgPath: PropTypes.string,
};

export default PlaceImage;
