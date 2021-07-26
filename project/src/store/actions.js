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
};

export const changeLoadingCommentProcessStatus = (isLoading) => ({
  type: ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS,
  payload: isLoading,
});

export const changeIsCommentSendedSuccessfullyStatus = (isCommentSendedSuccessfully) => ({
  type: ActionType.CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS,
  payload: isCommentSendedSuccessfully,
});

export const showErrorCommentFormMessage = (isShowErrorMessage, errorMessageText) => ({
  type: ActionType.SHOW_COMMENT_ERROR_MESSAGE,
  payload: {isShowErrorMessage, errorMessageText},
});

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const changeSortBy = (sortByValue) => ({
  type: ActionType.CHANGE_SORT_BY,
  payload: sortByValue,
});

export const loadPlaces = (places) => ({
  type: ActionType.LOAD_PLACES,
  payload: places,
});

export const loadNearbyPlaces = (nearbyPlaces) => ({
  type: ActionType.LOAD_NEARBY_PLACES,
  payload: nearbyPlaces,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const changeAuthorizationStatus = (status) => ({
  type: ActionType.CHANGE_AUTHORIZATION_STATUS,
  payload: status,
});

export const changeLogin = (login) => ({
  type: ActionType.CHANGE_LOGIN,
  payload: login,
});

export const changeFavorite = (id, newPlace) => ({
  type: ActionType.CHANGE_FAVORITE,
  payload: {id, newPlace},
});

export const removeNearbyPlaces = () => ({
  type: ActionType.REMOVE_NEARBY_PLACES,
});

export const removeComments = () => ({
  type: ActionType.REMOVE_COMMENTS,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});
