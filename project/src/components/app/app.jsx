import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Redirect, Route, Router as BrowserRouter} from 'react-router-dom';

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
import {changeAuthorizationStatus, changeLogin} from '../../store/actions';

function App() {
  const places = useSelector(getPlaces);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('login')) {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(changeLogin(localStorage.getItem('login')));
    }
  }, [authorizationStatus, dispatch]);

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
          {authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <Login />
            : <Redirect to={AppRoute.MAIN} />}
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
