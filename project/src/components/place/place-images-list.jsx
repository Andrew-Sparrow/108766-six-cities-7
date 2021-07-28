import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlaceImage from './place-image';
import Util from '../../util/util';

function PlaceImageList(props) {
  const {images} = props;
  const generatedIds = Util.generateIdKeys(images.length);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((imagePath, index) => <PlaceImage imgPath={imagePath} key={generatedIds[index]} />)}
      </div>
    </div>
  );
}

PlaceImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default memo(PlaceImageList, (prevProps, nextProps) => prevProps.images === nextProps.images);
