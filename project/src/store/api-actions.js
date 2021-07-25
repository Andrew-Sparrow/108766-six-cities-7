import { ActionCreator } from './actions';

import {
  changeLoadingCommentProcessStatus,
  changeIsCommentSendedSuccessfullyStatus,
  showErrorCommentFormMessage,
  loadPlaces,
  loadNearbyPlaces,
  loadComments,
  changeAuthorizationStatus,
  changeLogin
} from './actions';

import { AuthorizationStatus, APIRoute } from '../const';
import Utils from '../utils/utils';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => {
      const adaptedPlacesToClient = Utils.adaptPlacesToClient(data);
      dispatch(loadPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);

export const fetchNearbyPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({ data }) => {
      const adaptedPlacesToClient = Utils.adaptPlacesToClient(data);
      dispatch(loadNearbyPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then((info) => {
      dispatch(loadComments(info.data));
    })
    .catch((err) => {})
);

export const addToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${ APIRoute.FAVORITE }/${ id }/${ isFavorite ? 1 : 0 }`)
    .then((info) => {
      dispatch(ActionCreator.changeFavorite(id, info.data));
    })
    .catch((err) => {})
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then((info) => {
      localStorage.setItem('token', info.data.token);
      localStorage.setItem('login', info.data.email);
      dispatch(changeLogin(info.data.email));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((err) => {})
);

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.changeLoadingCommentProcessStatus(true));

  api.post(`${APIRoute.COMMENTS}/${ id }`, { comment, rating })
    .then((info) => {
      dispatch(loadComments(info.data));
      dispatch(changeLoadingCommentProcessStatus(false));
      dispatch(showErrorCommentFormMessage(false));
      dispatch(changeIsCommentSendedSuccessfullyStatus(true));
    })
    .catch((err) => {
      dispatch(showErrorCommentFormMessage(true, err.message));
      dispatch(changeLoadingCommentProcessStatus(false));
      dispatch(changeIsCommentSendedSuccessfullyStatus(false));
    });
};

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('login');
      dispatch(ActionCreator.logout());
    })
);
