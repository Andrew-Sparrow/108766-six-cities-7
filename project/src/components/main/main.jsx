import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import RoomList from '../room-list/room-list';
import withLayout from '../hocs/with-layout';
import Map from '../map/map';
import Tabs from '../tabs/tabs';
import SortBy from '../sort-by/sort-by';
import Util from '../../util/util';
import MainEmpty from '../main-empty/main-empty';
import {getPlaces, getSortBy, getActiveCityName} from '../../store/places/selectors';

function Main() {
  const [selectedPoint, setSelectedPoint] = useState({});

  const activeCityName = useSelector(getActiveCityName);
  const places = useSelector(getPlaces);
  const sortBy = useSelector(getSortBy);

  const filteredPlaces = Util.getFilteredPlaces(activeCityName, places);
  const sortedPlaces = Util.getSortedPlaces(sortBy, filteredPlaces);

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
          ? <MainEmpty activeCityName={activeCityName}/>
          : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortedPlaces.length} places to stay in {activeCityName}</b>
                  <SortBy />
                  <RoomList places={sortedPlaces} onListItemHover={onListItemHover}/>
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

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
