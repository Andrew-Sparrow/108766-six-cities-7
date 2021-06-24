const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  PROPERTY: '/property/:id?',
  ROOT: '/',
};

const zoom = 9;

const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';

const cityList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export {
  AppRoute,
  zoom,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  cityList
};
