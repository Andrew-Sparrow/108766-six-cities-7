export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT_BY: 'sortBy',
  LOAD_PLACES: 'data/loadPlaces',
  LOAD_NEARBY_PLACES: 'data/loadNearbyPlaces',
  REMOVE_NEARBY_PLACES: 'data/removeNearbyPlaces',
  LOAD_COMMENTS: 'data/loadComments',
  REMOVE_COMMENTS: 'data/removeComments',
  SEND_COMMENT: 'data/sendComment',
  SEND_COMMENT_RATING: 'data/sendCommentRating',
  CHANGE_AUTHORIZATION_STATUS: 'user/changeAuthorizationStatus',
  CHANGE_LOGIN: 'user/changeLogin',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
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
