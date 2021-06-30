import React from 'react';
import PropTypes from 'prop-types';
import PropertyReview from './property-review';
import Utils from '../../utils/utils';

function PropertyReviewList (props) {
  const { reviews } = props;
  return (
    <ul className="reviews__list">
      {reviews.map((item) =>
      {
        const adaptedCommentForClient = Utils.adaptCommentToClient(item);

        return (
          <PropertyReview
            key={adaptedCommentForClient.id}
            avatarImgPath={adaptedCommentForClient.user.avatarUrl}
            date={adaptedCommentForClient.date}
            text={adaptedCommentForClient.comment}
            name={adaptedCommentForClient.user.name}
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
