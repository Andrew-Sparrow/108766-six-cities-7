import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {SortByValues} from '../../const';
import {changeSortBy} from '../../store/actions';
import {getSortBy} from '../../store/places/selectors';

function SortBy(props) {
  const [isOpened, setIsOpened] = useState(false);
  const sortByValue = useSelector(getSortBy);
  const dispatch = useDispatch();

  const handleOpen = (evt) => {
    evt.preventDefault();
    setIsOpened((prevValue) => !prevValue);
  };

  const handleSortChange = (evt) => {
    dispatch(changeSortBy(evt.target.innerText));
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={(evt) => handleOpen(evt)}
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortByValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${ isOpened && 'places__options--opened' }`}>
        <li
          className={`places__option ${ sortByValue === SortByValues.POPULAR && 'places__option--active' }`}
          tabIndex="0"
          onClick={handleSortChange}
        >
          {SortByValues.POPULAR}
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.PRICE_LOW_TO_HIGH && 'places__option--active' }`}
          tabIndex="0"
          onClick={handleSortChange}
        >
          {SortByValues.PRICE_LOW_TO_HIGH}
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.PRICE_HIGH_TO_LOW && 'places__option--active' }`}
          tabIndex="0"
          onClick={handleSortChange}
        >
          {SortByValues.PRICE_HIGH_TO_LOW}
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.TOP_RATED_FIRST && 'places__option--active' }`}
          tabIndex="0"
          onClick={handleSortChange}
        >
          {SortByValues.TOP_RATED_FIRST}
        </li>
      </ul>
    </form>
  );
}

export default SortBy;
