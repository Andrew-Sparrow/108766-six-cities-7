import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RatingTitles = {
  PERFECT: 'perfect',
  GOOD: 'good',
  NOT_BAD: 'not bad',
  BADLY: 'badly',
  TERRIBLY: 'terribly',
};

const RatingCombination = {
  5: RatingTitles.PERFECT,
  4: RatingTitles.GOOD,
  3: RatingTitles.NOT_BAD,
  2: RatingTitles.BADLY,
  1: RatingTitles.TERRIBLY,
};

function PlaceRatingStar(props) {
  const {
    index,
    rating,
  } = props;

  const serialNumber = +index + 1;
  const isActive = (rating === serialNumber);

  return (
    <Fragment>
      <input
        className={`form__rating-input ${isActive ? 'form__rating-input--active' : ''} visually-hidden`}
        name="rating"
        defaultValue={serialNumber}
        id={ `${serialNumber}-stars` }
        type="radio"
        defaultChecked={ false }
      />
      <label
        htmlFor={ `${ serialNumber }-stars` }
        className="reviews__rating-label form__rating-label"
        title={ RatingCombination[serialNumber] }
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  );
}

PlaceRatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default PlaceRatingStar;
