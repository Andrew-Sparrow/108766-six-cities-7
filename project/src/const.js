export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const MAX_RATING = 5;
export const MAX_PERCENT = 100;
export const MAX_COMMENTS_AMOUNT = 10;

export const ZOOM = 12;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cityList = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

export const LoginValue = {
  UNAUTHORIZED: 'UNAUTHORIZED',
};

export const APIRoute = {
  HOTELS: '/hotels',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const SortByValues = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};
