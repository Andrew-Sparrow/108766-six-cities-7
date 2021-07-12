export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT_BY: 'sortBy',
  LOAD_PLACES: 'data/loadPlaces',
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
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  changeLogin: (login) => ({
    type: ActionType.CHANGE_LOGIN,
    payload: login,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
