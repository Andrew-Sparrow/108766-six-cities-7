import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import {
  AppRoute,
  AuthorizationStatus
} from '../../const.js';

import { ActionCreator } from '../../store/actions';

import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from '../../browser-history';

function App(props) {
  const {
    isDataLoaded,
    places,
    authorizationStatus,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if ((authorizationStatus === AuthorizationStatus.UNKNOWN)
      && (localStorage.getItem('login') !== null || localStorage.getItem('token') !== null)) {

      const email = localStorage.getItem('login');

      dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeLogin(email));
    }
  }, [authorizationStatus, dispatch]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={ browserHistory }>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          {authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <Login />
            : <Main className="page page--gray page--index" />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites places={places} className="page" />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.HOTELS}>
          <Property className="page" />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  places: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
