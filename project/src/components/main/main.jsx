import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RoomList from '../room-list/room-list';
import withLayout from '../hocs/with-layout';
import Map from '../map/map';
import Tabs from '../tabs/tabs';
import SortBy from '../sort-by/sort-by';
import Utils from '../../utils/utils';
import MainEmpty from '../main-empty/main-empty';
import { SortByValues } from '../../const';

function Main(props) {
  const { places, activeCityName } = props;

  const [selectedPoint, setSelectedPoint] = useState({});
  const [sortByValue, setSortByValue] = useState(SortByValues.POPULAR);

  const filteredPlaces = Utils.getFilteredPlaces(activeCityName, places);

  const [sortedPlaces, setSortedPlaces] = useState(filteredPlaces);

  const handleChange = (evt) => {
    if (evt.target.tagName === 'LI') {
      setSortByValue(evt.target.innerText);
      switch (sortByValue) {
        case SortByValues.POPULAR:
          setSortedPlaces(filteredPlaces);
          break;
        case SortByValues.PRICE_LOW_TO_HIGH:
          setSortedPlaces(Utils.sortByPriceFromLowToHigh(filteredPlaces));
          break;
        case SortByValues.PRICE_HIGH_TO_LOW:
          setSortedPlaces(Utils.sortByPriceFromHighToLow(filteredPlaces));
          break;
        case SortByValues.TOP_RATED_FIRST:
          setSortedPlaces(Utils.sortByRating(filteredPlaces));
          break;
        default:
          setSortedPlaces(filteredPlaces);
      }
    }
  };

  const onListItemHover = (listItem) => {
    const currentPoint = sortedPlaces.find((place) => place.id === parseInt(listItem.id, 10));
    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        sortedPlaces.length === 0
          ? < MainEmpty activeCityName={activeCityName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredPlaces.length} places to stay in {activeCityName}</b>
                  <SortBy handleChange={handleChange} sortByValue={sortByValue}/>
                  < RoomList places={sortedPlaces} onListItemHover={onListItemHover} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      activeCityName={activeCityName}
                      city={sortedPlaces.length !== 0 && sortedPlaces[0].city}
                      points={sortedPlaces}
                      selectedPoint={selectedPoint}
                    />
                  </section>
                </div>
              </div>
            </div>
          )
      }
    </main>
  );
}

const mapStateToProps = (state) => ({
  activeCityName: state.activeCityName,
});

Main.propTypes = {
  places: PropTypes.array,
  activeCityName: PropTypes.string.isRequired,
};

const withLayoutMain = withLayout(Main);
export { withLayoutMain };
export default connect(mapStateToProps, null)(withLayoutMain);
