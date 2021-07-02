import React from 'react';
import nanoid from 'nanoid';
import PropertyCommentStarActive from './property-comment-star-active';
import PropertyCommentStarNonActive from './property-comment-star-nonactive';

const MAX_STARS_AMOUNT = 5;

function PropertyCommentStarsList (props) {
  const { rating } = props;
  const roundedRating = Math.round(rating);

  const list = new Array(MAX_STARS_AMOUNT).fill('');
  const generatedIdList = list.map(() => nanoid(10));

  const roundedStars = generatedIdList.map((id, index) => roundedRating > index ? (generatedIdList[index] = < PropertyCommentStarActive key={ id } />) : <PropertyCommentStarNonActive key={ id } />);

  return roundedStars;
}

export default PropertyCommentStarsList;
