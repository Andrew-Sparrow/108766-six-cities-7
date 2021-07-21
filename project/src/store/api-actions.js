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
      dispatch(ActionCreator.changeLoadingCommentProcessStatus(false));
      dispatch(ActionCreator.showErrorCommentFormMessage(false));
    })
    .catch((err) => {
      dispatch(ActionCreator.showErrorCommentFormMessage(true));
      dispatch(ActionCreator.changeLoadingCommentProcessStatus(false));
    });
};

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      if ((localStorage.getItem('login') !== null || localStorage.getItem('token') !== null)) {
        localStorage.setItem('token', null);
        localStorage.setItem('login', null);
      }
      dispatch(ActionCreator.logout());
    })
);
