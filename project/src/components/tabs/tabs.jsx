import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  cityList,
  SortByValues
} from '../../const';
import { ActionCreator } from '../../store/action';

function Tabs(props) {
  const { activeCityName, onTabClick } = props;

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
                onClick={(evt) =>{
                  evt.preventDefault();
                  onTabClick(evt.currentTarget.dataset.city);
                }}
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

const mapStateToProps = (state) => ({
  activeCityName: state.activeCityName,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(cityName) {
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.changeSortBy(SortByValues.POPULAR));
  },
});

Tabs.propTypes = {
  activeCityName: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
};

export { Tabs };
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
