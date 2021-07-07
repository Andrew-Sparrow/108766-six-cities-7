import React, { useState } from 'react';

function SortBy() {
  const [sortByValue, setSortByValue] = useState('Popular');
  const [isOpened, setIsOpened] = useState(false);

  const handleChange = (evt) => {
    evt.preventDefault();
    setIsOpened((prevValue) => !prevValue);

    if (evt.target.tagName === 'LI') {
      setSortByValue(evt.target.innerText);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={(evt) => handleChange(evt)}>
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0">
        { sortByValue }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        <li className={`places__option ${sortByValue === 'Popular' && 'places__option--active'}`} tabIndex="0">Popular</li>
        <li className={`places__option ${sortByValue === 'Price: low to high' && 'places__option--active'}`} tabIndex="0">Price: low to high</li>
        <li className={`places__option ${sortByValue === 'Price: high to low' && 'places__option--active'}`} tabIndex="0">Price: high to low</li>
        <li className={`places__option ${sortByValue === 'Top rated first' && 'places__option--active'}`} tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
}

export default SortBy;
