import React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import Error from '../error/error';
import offerProp from '../room/room.prop.js';

function App(props) {
  const offers = props.offers;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main places={offers} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login places={offers} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites places={offers} />
        </Route>
        <Route exact path={AppRoute.PROPERTY}>
          <Property place={offers[0]} price={0}/>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default App;
