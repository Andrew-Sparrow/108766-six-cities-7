import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';


import {
  Link,
  generatePath,
  useHistory
} from 'react-router-dom';

import CardInfo from '../card-info/card-info';

function Room(props) {
  const {
    price,
    onListItemHover,
    id,
    title,
    isPremium,
    isFavorite,
    type,
    rating,
  } = props;

  const width = Utils.getWidthByRating(rating);

  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.currentTarget);
  };

  const history = useHistory();

  const handleProceed = (evt) => {
    id && history.push(generatePath('/hotels/:id', { id }));
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={listItemHoverHandler}
      id={id}
      onClick={(evt) => handleProceed(evt)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      < CardInfo
        price={price}
        title={title}
        isFavorite={isFavorite}
        type={type}
        width={width}
      />
    </article>
  );
}

Room.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number,
  onListItemHover: PropTypes.func,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  type: PropTypes.string,
  rating: PropTypes.number,
};

export default Room;
