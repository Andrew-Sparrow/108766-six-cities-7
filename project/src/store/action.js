export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
};
