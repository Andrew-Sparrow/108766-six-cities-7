import React from 'react';
import PropTypes from 'prop-types';
import PlaceComment from './place-comment';
import Util from '../../util/util';
import {MAX_COMMENTS_AMOUNT} from '../../const';

function PlaceCommentList(props) {
  const {reviews} = props;
  const slicedReviews = reviews.slice(0, MAX_COMMENTS_AMOUNT);

  return (
    <ul className="reviews__list">
      {slicedReviews.map((item) => {
        const adaptedCommentForClient = Util.adaptCommentToClient(item);

        return (
          <PlaceComment
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

PlaceCommentList.propTypes = {
  reviews: PropTypes.array,
};

export default PlaceCommentList;
