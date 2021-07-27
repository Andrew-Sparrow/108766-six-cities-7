import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {cityList, SortByValues} from '../../const';
import {changeCity} from '../../store/actions';
import {changeSortBy} from '../../store/actions';
import {getActiveCityName} from '../../store/places/selectors';

function Tabs(props) {
  const activeCityName = useSelector(getActiveCityName);
  const dispatch = useDispatch();

  const handleTabClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.currentTarget.dataset.city));
    dispatch(changeSortBy(SortByValues.POPULAR));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                data-city={city}
                className={`locations__item-link tabs__item ${ city === activeCityName && 'tabs__item--active' }`}
                to="#"
                onClick={handleTabClick}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
