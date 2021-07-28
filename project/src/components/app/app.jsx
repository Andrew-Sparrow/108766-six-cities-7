import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Place from '../place/place';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import { getPlaces, getIsDataLoaded} from '../../store/places/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {
  const places = useSelector(getPlaces);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main className="page page--gray page--index" />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          {authorizationStatus === AuthorizationStatus.NO_AUTH || authorizationStatus === AuthorizationStatus.UNKNOWN
            ? <Login />
            : <Main className="page page--gray page--index" />}
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites places={places} className="page" />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}>
          <Place className="page" />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
