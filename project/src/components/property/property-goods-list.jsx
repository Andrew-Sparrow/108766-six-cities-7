import React from 'react';
import PropTypes from 'prop-types';
import PropertyGood from './property-good';
import Utils from '../../utils/utils';

function PropertyGoodsList (props) {
  const { goods } = props;
  const generatedIds = Utils.generateIdKeys(goods.length);

  return (
    <ul className="property__inside-list">
      {goods.map((good, index) => <PropertyGood good={good} key={generatedIds[index]} />)}
    </ul>
  );
}

PropertyGoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

export default PropertyGoodsList;
