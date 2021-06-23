import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cityList } from '../../const';

function Tabs(props) {
  const { activeCity } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city) => (
            <li className="locations__item" key={city}>
              <Link className={`locations__item-link tabs__item ${ city === activeCity && 'tabs__item--active' }`} to="#">
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = {
  activeCity: PropTypes.object,
};

export default Tabs;
