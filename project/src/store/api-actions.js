import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute } from '../const';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => dispatch(ActionCreator.loadPlaces(data)))
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then((info) => {
      // eslint-disable-next-line
      console.log(info);
      localStorage.setItem('token', info.data.token);
    })
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
      dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
      dispatch(ActionCreator.changeLogin('11111'));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
