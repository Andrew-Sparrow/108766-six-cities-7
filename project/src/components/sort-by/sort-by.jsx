import React, { useState } from 'react';
import { SortByValues } from '../../const';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeSortBy } from '../../store/actions';

function SortBy( props ) {
  const { sortByValue, onSortChange } = props;
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = (evt) => {
    evt.preventDefault();
    setIsOpened((prevValue) => !prevValue);
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
        { sortByValue }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        <li
          className={`places__option ${ sortByValue === SortByValues.POPULAR && 'places__option--active' }`}
          tabIndex="0"
          onClick={(evt) =>{
            evt.preventDefault();
            if (evt.target.tagName === 'LI') {
              onSortChange(evt.target.innerText);
            }
          }}
        >
          { SortByValues.POPULAR }
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.PRICE_LOW_TO_HIGH && 'places__option--active' }`}
          tabIndex="0"
          onClick={(evt) =>{
            evt.preventDefault();
            if (evt.target.tagName === 'LI') {
              onSortChange(evt.target.innerText);
            }
          }}
        >
          { SortByValues.PRICE_LOW_TO_HIGH }
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.PRICE_HIGH_TO_LOW && 'places__option--active' }`}
          tabIndex="0"
          onClick={(evt) =>{
            evt.preventDefault();
            if (evt.target.tagName === 'LI') {
              onSortChange(evt.target.innerText);
            }
          }}
        >
          { SortByValues.PRICE_HIGH_TO_LOW }
        </li>
        <li
          className={`places__option ${ sortByValue === SortByValues.TOP_RATED_FIRST && 'places__option--active' }`}
          tabIndex="0"
          onClick={(evt) =>{
            evt.preventDefault();
            if (evt.target.tagName === 'LI') {
              onSortChange(evt.target.innerText);
            }
          }}
        >
          { SortByValues.TOP_RATED_FIRST }
        </li>
      </ul>
    </form>
  );
}

const mapStateToProps = (state) => ({
  sortByValue: state.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  onSortChange(sortByValue) {
    dispatch(changeSortBy(sortByValue));
  },
});

SortBy.propTypes = {
  sortByValue: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export { SortBy };
export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
