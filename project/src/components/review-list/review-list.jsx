import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

function ReviewList (props) {
  const { reviews } = props;
  return (
    <ul className="reviews__list">
      {reviews.map((item) =>
        (
          <Review
            key={item.id}
            avatarImgPath={item.user.avatarUrl}
            date={item.date}
            text={item.comment}
          />
        ))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewList;
