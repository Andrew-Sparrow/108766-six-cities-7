import {
  changeLoadingCommentProcessStatus,
  changeIsCommentSendedSuccessfullyStatus,
  showErrorCommentFormMessage,
  loadPlaces,
  loadNearbyPlaces,
  loadComments,
  changeAuthorizationStatus,
  changeLogin,
  changeFavorite,
  logout as userLogout,
  redirectToRoute
} from './actions';

import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import Util from '../util/util';

export const fetchPlacesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const adaptedPlacesToClient = Util.adaptPlacesToClient(data);
      dispatch(loadPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);

export const fetchNearbyPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS }/${ id }/nearby`)
    .then(({data}) => {
      const adaptedPlacesToClient = Util.adaptPlacesToClient(data);
      dispatch(loadNearbyPlaces(adaptedPlacesToClient));
    })
    .catch((err) => {})
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS }/${id}`)
    .then((info) => {
      dispatch(loadComments(info.data));
    })
    .catch((err) => {})
);

export const addToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE }/${id}/${isFavorite ? 1 : 0}`)
    .then((info) => {
      dispatch(changeFavorite(id, info.data));
    })
    .catch((err) => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  localStorage.removeItem('token');
  localStorage.removeItem('login');
  api.post(APIRoute.LOGIN, {email, password})
    .then((info) => {
      localStorage.setItem('token', info.data.token);
      localStorage.setItem('login', info.data.email);
      dispatch(changeLogin(info.data.email));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
    .catch((err) => {});
};

export const sendComment = (id, comment, rating) => (dispatch, _getState, api) => {
  dispatch(changeLoadingCommentProcessStatus(true));

  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then((info) => {
      dispatch(loadComments(info.data));
      dispatch(changeLoadingCommentProcessStatus(false));
      dispatch(showErrorCommentFormMessage(false));
      dispatch(changeIsCommentSendedSuccessfullyStatus(true));
      /*
      this additional bottom line was made for clean up a comment form
      and establish "isCommentFormSendedSuccessfully" to "false"
      to fix problem with save text in comment form after network error
       */
      dispatch(changeIsCommentSendedSuccessfullyStatus(false));
    })
    .catch((err) => {
      dispatch(showErrorCommentFormMessage(true, err.message));
      dispatch(changeLoadingCommentProcessStatus(false));
      dispatch(changeIsCommentSendedSuccessfullyStatus(false));
    });
};

export const logout = () => (dispatch, _getState, api) => {
  localStorage.removeItem('token');
  localStorage.removeItem('login');

  api.delete(APIRoute.LOGOUT)
    .then(() => {
      dispatch(userLogout());
    });
};
