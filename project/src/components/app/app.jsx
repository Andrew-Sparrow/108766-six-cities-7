import React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const.js'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';

function App(props) {
  const places = props.places;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main places={places} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login places={places} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites places={places} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <Offer places={places} />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default App;
