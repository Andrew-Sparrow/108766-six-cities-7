import React from 'react';
import PropertyCommentStarActive from './property-comment-star-active';
import PropertyCommentStarNonActive from './property-comment-star-nonactive';
import Utils from '../../utils/utils';

const MAX_STARS_AMOUNT = 5;

function PropertyCommentStarsList (props) {
  const { rating } = props;
  const roundedRating = Math.round(rating);

  const generatedIdList = Utils.generateIdKeys(MAX_STARS_AMOUNT);

  const roundedStars = generatedIdList.map((id, index) => roundedRating > index ? (generatedIdList[index] = < PropertyCommentStarActive key={ id } />) : <PropertyCommentStarNonActive key={ id } />);

  return roundedStars;
}

export default PropertyCommentStarsList;
