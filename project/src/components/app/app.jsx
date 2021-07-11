import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const.js';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import Utils from '../../utils/utils';
import browserHistory from '../../browser-history';

function App(props) {
  const { authorizationStatus, isDataLoaded, places } = props;

  if (Utils.isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={ browserHistory }>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main className="page page--gray page--main" />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites places={places} className="page" />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.HOTELS}>
          <Property price={0} className="page" />
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
