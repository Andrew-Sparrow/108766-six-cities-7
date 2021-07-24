import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PropertyImage from './property-image';
import Utils from '../../utils/utils';

function PropertyImagesList (props) {
  const { images } = props;
  const generatedIds = Utils.generateIdKeys(images.length);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((imagePath, index) => <PropertyImage imgPath={imagePath} key={generatedIds[index]} />)}
      </div>
    </div>
  );
}

PropertyImagesList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default memo(PropertyImagesList, (prevProps, nextProps) =>  prevProps.images === nextProps.images);
