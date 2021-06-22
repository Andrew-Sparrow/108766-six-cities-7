export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
  }),
};
