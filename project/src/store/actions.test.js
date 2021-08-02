import {
  ActionType,
  changeLoadingCommentProcessStatus,
  changeIsCommentSendedSuccessfullyStatus,
  showErrorCommentFormMessage,
  changeCity,
  changeSortBy,
  loadPlaces,
  loadNearbyPlaces,
  removeNearbyPlaces,
  loadComments,
  removeComments,
  changeAuthorizationStatus,
  changeLogin,
  changeFavorite,
  logout,
  resetFavorites,
  redirectToRoute
} from './actions';

import {AuthorizationStatus} from '../const';

const offers = [
  {
    'id': 1,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Beautiful & luxurious studio at great location',
    'city': {
      'name': 'Amsterdam',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': true,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 2,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 3,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'location': {},
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 4,
    'price': 180,
    'bedrooms': 3,
    'city': {
      'location': {},
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 5,
    'price': 2220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Campanile PARIS OUEST - Pont de Suresnes',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8588376,
        'longitude': 2.2768488,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': false,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
  },
  {
    'id': 6,
    'price': 2220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Holiday Inn Express Paris - Canal de la Villette',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8588376,
        'longitude': 2.2768488,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.8,
  },
  {
    'id': 7,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Cappuccini Resort',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 45.577327089867396,
        'longitude': 9.938598635190925,
        'zoom': 12,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 8,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Hotel Touring',
    'city': {
      'name': 'Cologne',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 9,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Premier Inn Hamburg City (Zentrum) hotel',
    'city': {
      'name': 'Hamburg',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {
      'id': 3,
      'avatarUrl': 'img/1.png',
      'isPro': true,
      'name': 'Angelina',
    },
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
  {
    'id': 10,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Steigenberger Parkhotel',
    'city': {
      'name': 'Dusseldorf',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {},
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'rating': 4.0,
  },
];

const mockComments = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4.2,
    'user': {},
  },
  {
    'comment': 'A quiet cozy and pictu by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 2.8,
    'user': {},
  },
];

const neighbourhoodPlaces = [
  {
    'id': 1,
    'price': 220,
    'bedrooms': 3,
    'type': 'apartment',
    'title': 'Beautiful & luxurious studio at great location',
    'city': {
      'name': 'Amsterdam',
      'location': {},
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {
      'id': 3,
      'avatar_url': 'img/1.png',
      'is_pro': true,
      'name': 'Angelina',
    },
    'images': ['img/room.jpg', 'img/room.jpg'],
    'is_favorite': true,
    'is_premium': true,
    'location': {},
    'max_adults': 4,
    'preview_image': 'img/room.jpg',
    'rating': 4.0,
  },
  {
    'id': 2,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.38333,
        'longitude': 4.9,
        'zoom': 10,
      },
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/apartment-02.jpg', 'img/apartment-02.jpg'],
    'is_favorite': true,
    'is_premium': false,
    'location': {},
    'max_adults': 4,
    'preview_image': 'img/apartment-02.jpg',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 3,
    'price': 120,
    'bedrooms': 3,
    'city': {
      'location': {},
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [],
    'host': {},
    'images': ['img/apartment-03.jpg', 'img/apartment-03.jpg'],
    'is_favorite': false,
    'is_premium': false,
    'location': {},
    'max_adults': 4,
    'preview_image': 'img/apartment-03.jpg',
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

export const placeHotel =
{
  'id': 1,
  'price': 2200,
  'bedrooms': 5,
  'type': 'apartment',
  'title': 'Beautiful & luxurious studio at great location',
  'city': {
    'name': 'Amsterdam',
    'location': {},
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': [],
  'host': {
    'id': 3,
    'avatar_url': 'img/avatar-angelina.jpg',
    'is_pro': true,
    'name': 'Angelina',
  },
  'images': [],
  'is_favorite': false,
  'is_premium': true,
  'location': {},
  'max_adults': 40,
  'preview_image': 'img/1.png',
  'rating': 0.5,
};

describe('Actions', () => {
  it('action creator for change loading comment process status returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS,
      payload: true,
    };

    expect(changeLoadingCommentProcessStatus(true)).toEqual(expectedAction);
  });

  it('action creator for changeIsCommentSendedSuccessfullyStatus returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS,
      payload: true,
    };

    expect(changeIsCommentSendedSuccessfullyStatus(true)).toEqual(expectedAction);
  });

  it('action creator for showErrorCommentFormMessage returns correct action', () => {
    const expectedAction = {
      type: ActionType.SHOW_COMMENT_ERROR_MESSAGE,
      payload: {isShowErrorMessage: true, errorMessageText: 'test'},
    };

    expect(showErrorCommentFormMessage(true, 'test')).toEqual(expectedAction);
  });

  it('action creator for changeCity returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'testCity',
    };

    expect(changeCity('testCity')).toEqual(expectedAction);
  });

  it('action creator for changeSortBy returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_BY,
      payload: 'testSortBy',
    };

    expect(changeSortBy('testSortBy')).toEqual(expectedAction);
  });

  it('action creator for loadPlaces returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_PLACES,
      payload: offers,
    };

    expect(loadPlaces(offers)).toEqual(expectedAction);
  });

  it('action creator for loadNearbyPlaces returns correct action', () => {
    const testNearbyPlaces = neighbourhoodPlaces;
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_PLACES,
      payload: testNearbyPlaces,
    };

    expect(loadNearbyPlaces(neighbourhoodPlaces)).toEqual(expectedAction);
  });

  it('action creator for removeNearbyPlaces returns correct action', () => {
    const expectedAction = {type: ActionType.REMOVE_NEARBY_PLACES};

    expect(removeNearbyPlaces()).toEqual(expectedAction);
  });

  it('action creator for loadComments returns correct action', () => {
    const testComments = mockComments;
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: testComments,
    };

    expect(loadComments(mockComments)).toEqual(expectedAction);
  });

  it('action creator for removeComments returns correct action', () => {
    const expectedAction = {type: ActionType.REMOVE_COMMENTS};

    expect(removeComments()).toEqual(expectedAction);
  });

  it('action creator for changeAuthorizationStatus returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    };

    expect(changeAuthorizationStatus(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });

  it('action creator for changeLogin returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_LOGIN,
      payload: 'testLogin',
    };

    expect(changeLogin('testLogin')).toEqual(expectedAction);
  });

  it('action creator for changeFavorite returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE,
      payload: {id: 1, newPlace: placeHotel},
    };

    expect(changeFavorite(1, placeHotel)).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {type: ActionType.LOGOUT};

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for resetFavorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_FAVORITES,
      payload: [],
    };

    expect(resetFavorites([])).toEqual(expectedAction);
  });

  it('action creator for redirectToRoute returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'url',
    };

    expect(redirectToRoute('url')).toEqual(expectedAction);
  });
});
