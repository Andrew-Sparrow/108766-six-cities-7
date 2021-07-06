import React from 'react';
import PropTypes from 'prop-types';
import PropertyComment from './property-comment';
import Utils from '../../utils/utils';
import { MAX_COMMENTS_AMOUNT } from '../../const';

function PropertyReviewList (props) {
  const { reviews } = props;
  const slicedReviews = reviews.slice(0, MAX_COMMENTS_AMOUNT);

  return (
    <ul className="reviews__list">
      {slicedReviews.map((item) =>
      {
        const adaptedCommentForClient = Utils.adaptCommentToClient(item);

        return (
          <PropertyComment
            key={adaptedCommentForClient.id}
            avatarImgPath={adaptedCommentForClient.user.avatarUrl}
            date={adaptedCommentForClient.date}
            text={adaptedCommentForClient.comment}
            name={adaptedCommentForClient.user.name}
            rating={adaptedCommentForClient.rating}
          />
        );
      })}
    </ul>
  );
}

PropertyReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default PropertyReviewList;
