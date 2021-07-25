import { ActionCreator } from './actions';

import { changeLoadingCommentProcessStatus } from './actions';

import { AuthorizationStatus, APIRoute } from '../const';
import Utils from '../utils/utils';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({ data }) => {
      const adaptedPlacesToClient = Utils.adaptPlacesToClient(data);
      dispatch(ActionCreator.loadPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);

export const fetchNearbyPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({ data }) => {
      const adaptedPlacesToClient = Utils.adaptPlacesToClient(data);
      dispatch(ActionCreator.loadNearbyPlaces(adaptedPlacesToClient));
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
      dispatch(ActionCreator.changeLogin(info.data.email));
      dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((err) => {})
);

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.changeLoadingCommentProcessStatus(true));

  api.post(`${APIRoute.COMMENTS}/${ id }`, { comment, rating })
    .then((info) => {
      dispatch(ActionCreator.loadComments(info.data));
      dispatch(changeLoadingCommentProcessStatus(false));
      dispatch(ActionCreator.showErrorCommentFormMessage(false));
      dispatch(ActionCreator.changeIsCommentSendedSuccessfullyStatus(true));
    })
    .catch((err) => {
      dispatch(ActionCreator.showErrorCommentFormMessage(true, err.message));
      dispatch(ActionCreator.changeLoadingCommentProcessStatus(false));
      dispatch(ActionCreator.changeIsCommentSendedSuccessfullyStatus(false));
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
