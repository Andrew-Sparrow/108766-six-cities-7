import React from 'react';
import PropTypes from 'prop-types';

function PropertyImage (props) {
  const { imgPath } = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={ imgPath } alt="studio" />
    </div>
  );
}

PropertyImage.propTypes = {
  imgPath: PropTypes.string,
};

export default PropertyImage;
