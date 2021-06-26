export const ActionType = {
  CHANGE_CITY: 'changeCity',
  LOAD_PLACES: 'data/loadPlaces',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places,
  }),
};
