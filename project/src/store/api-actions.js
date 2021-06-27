import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute } from '../const';

export const fetchPlacesList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.HOTELS)
    .then(({ data }) => dispatch(ActionCreator.loadPlaces(data)));
};

export const checkAuth = () => (dispatch, _getState, api) =>
  api.get(APIRoute.LOGIN)
    .then(({ data }) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});

export const login = ( {login: email, password }) => (dispatch, _getState, api) =>
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)));

export const logout = () => (dispatch, _getState, api) => {
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
};