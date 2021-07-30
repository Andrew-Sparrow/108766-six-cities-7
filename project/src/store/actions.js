import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'places/changeCity',
  CHANGE_SORT_BY: 'places/sortBy',
  LOAD_PLACES: 'places/loadPlaces',
  LOAD_NEARBY_PLACES: 'places/loadNearbyPlaces',
  REMOVE_NEARBY_PLACES: 'places/removeNearbyPlaces',
  CHANGE_FAVORITE: 'places/isFavorite',
  LOAD_COMMENTS: 'comments/loadComments',
  REMOVE_COMMENTS: 'comments/removeComments',
  CHANGE_AUTHORIZATION_STATUS: 'user/changeAuthorizationStatus',
  CHANGE_LOGIN: 'user/changeLogin',
  LOGOUT: 'user/logout',
  CHANGE_LOADING_COMMENT_PROCESS_STATUS: 'comment/changeLoadingCommentProcessStatus',
  SHOW_COMMENT_ERROR_MESSAGE: 'comment/showErrorCommentFormMessage',
  SEND_COMMENT: 'comment/sendComment',
  SEND_COMMENT_RATING: 'comment/sendCommentRating',
  CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS: 'comment/changeCommentSendedSuccessfulyStatus',
  RESET_FAVORITES: 'places/resetFavorites',
  REDIRECT_TO_ROUTE: 'places/redirectToRoute',
};

export const changeLoadingCommentProcessStatus = createAction(
  ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS,
  (isLoading) => ({payload: isLoading}),
);

export const changeIsCommentSendedSuccessfullyStatus = createAction(
  ActionType.CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS,
  (isCommentSendedSuccessfully) => ({payload: isCommentSendedSuccessfully}),
);

export const showErrorCommentFormMessage = createAction(
  ActionType.SHOW_COMMENT_ERROR_MESSAGE,
  (isShowErrorMessage, errorMessageText) => ({payload: {isShowErrorMessage, errorMessageText}}),
);

export const changeCity = createAction(
  ActionType.CHANGE_CITY,
  (cityName) => ({payload: cityName}),
);

export const changeSortBy = createAction(
  ActionType.CHANGE_SORT_BY,
  (sortByValue) => ({payload: sortByValue}),
);

export const loadPlaces = createAction(
  ActionType.LOAD_PLACES,
  (places) => ({payload: places}),
);

export const loadNearbyPlaces = createAction(
  ActionType.LOAD_NEARBY_PLACES,
  (nearbyPlaces) => ({payload: nearbyPlaces}),
);

export const removeNearbyPlaces = createAction(ActionType.REMOVE_NEARBY_PLACES);

export const loadComments = createAction(
  ActionType.LOAD_COMMENTS,
  (comments) => ({payload: comments}),
);

export const removeComments = createAction(ActionType.REMOVE_COMMENTS);

export const changeAuthorizationStatus = createAction(
  ActionType.CHANGE_AUTHORIZATION_STATUS,
  (status) => ({payload: status}),
);

export const changeLogin = createAction(
  ActionType.CHANGE_LOGIN,
  (login) => ({payload: login}),
);

export const changeFavorite = createAction(
  ActionType.CHANGE_FAVORITE,
  (id, newPlace) => ({payload: {id, newPlace}}),
);

export const logout = createAction(ActionType.LOGOUT);

export const resetFavorites = createAction(
  ActionType.RESET_FAVORITES,
  (places) => ({payload: places}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);
