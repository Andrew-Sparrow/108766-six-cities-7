export const ActionType = {
  CHANGE_CITY: 'places/changeCity',
  CHANGE_SORT_BY: 'places/sortBy',
  LOAD_PLACES: 'places/loadPlaces',
  LOAD_NEARBY_PLACES: 'places/loadNearbyPlaces',
  REMOVE_NEARBY_PLACES: 'places/removeNearbyPlaces',
  LOAD_COMMENTS: 'comments/loadComments',
  REMOVE_COMMENTS: 'comments/removeComments',
  SEND_COMMENT: 'comment/sendComment',
  SEND_COMMENT_RATING: 'comment/sendCommentRating',
  CHANGE_AUTHORIZATION_STATUS: 'user/changeAuthorizationStatus',
  CHANGE_LOGIN: 'user/changeLogin',
  LOGOUT: 'user/logout',
  CHANGE_FAVORITE: 'place/isFavorite',
  CHANGE_LOADING_COMMENT_PROCESS_STATUS: 'comment/changeLoadingCommentProcessStatus',
  CHANGE_LOADING_COMMENT_SUCCESSFUL_STATUS: 'comment/changeLoadingCommentSuccessfulStatus',
};

export const ActionCreator = {
  changeLoadingCommentProcessStatus: (isLoading) => ({
    type: ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS,
    payload: isLoading,
  }),
  changeLoadingCommentSuccessfulStatus: (isLoadedSuccessfully) => ({
    type: ActionType.CHANGE_LOADING_COMMENT_SUCCESSFUL_STATUS,
    payload: isLoadedSuccessfully,
  }),
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  changeSortBy: (sortByValue) => ({
    type: ActionType.CHANGE_SORT_BY,
    payload: sortByValue,
  }),
  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places,
  }),
  loadNearbyPlaces: (nearbyPlaces) => ({
    type: ActionType.LOAD_NEARBY_PLACES,
    payload: nearbyPlaces,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  changeLogin: (login) => ({
    type: ActionType.CHANGE_LOGIN,
    payload: login,
  }),
  changeFavorite: (id, newPlace) => ({
    type: ActionType.CHANGE_FAVORITE,
    payload: {id, newPlace},
  }),
  removeNearbyPlaces: () => ({
    type: ActionType.REMOVE_NEARBY_PLACES,
  }),
  removeComments: () => ({
    type: ActionType.REMOVE_COMMENTS,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
