import { ActionCreator } from './actions';
import { AuthorizationStatus, APIRoute } from '../const';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => {
      dispatch(ActionCreator.loadPlaces(data));
    })
    .catch((err) => {})
);

export const fetchNearbyPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({ data }) => {
      dispatch(ActionCreator.loadNearbyPlaces(data));
    })
    .catch((err) => {})
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then((info) => {
      dispatch(ActionCreator.loadComments(info.data));
    })
    .catch((err) => {})
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then((info) => {
      localStorage.setItem('token', info.data.token);
      dispatch(ActionCreator.changeLogin(info.data.email));
      dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((err) => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
