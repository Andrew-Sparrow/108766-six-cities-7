export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT_BY: 'sortBy',
  LOAD_PLACES: 'data/loadPlaces',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
