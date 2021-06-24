import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RoomList from '../room-list/room-list';
import offerProp from '../room/room.prop';
import withLayout from '../hocs/with-layout';
import Map from '../map/map';
import Tabs from '../tabs/tabs';
import SortBy from '../sort-by/sort-by';
import Utils from '../../utils/utils';
import EmptyList from '../empty-list/empty-list';

function Main(props) {
  const { places, activeCityName } = props;

  const [selectedPoint, setSelectedPoint] = useState({});
  const filteredPlaces = Utils.getFilteredPlaces(activeCityName, places);

  const onListItemHover = (listItem) => {
    const currentPoint = places.find((point) => point.id === parseInt(listItem.id, 10));
    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {
        filteredPlaces.length === 0
          ? < EmptyList activeCityName={activeCityName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredPlaces.length} places to stay in {activeCityName}</b>
                  <SortBy />
                  < RoomList places={filteredPlaces} onListItemHover={onListItemHover} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      activeCityName={activeCityName}
                      city={filteredPlaces[0].city}
                      points={filteredPlaces}
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
  places: PropTypes.arrayOf(offerProp),
  activeCityName: PropTypes.string.isRequired,
};

const withLayoutMain = withLayout(Main);
export { withLayoutMain };
export default connect(mapStateToProps, null)(Main);
