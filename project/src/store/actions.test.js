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
      payload: [],
    };

    expect(loadPlaces([])).toEqual(expectedAction);
  });

  it('action creator for loadNearbyPlaces returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_PLACES,
      payload: [],
    };

    expect(loadNearbyPlaces([])).toEqual(expectedAction);
  });

  it('action creator for removeNearbyPlaces returns correct action', () => {
    const expectedAction = {type: ActionType.REMOVE_NEARBY_PLACES};

    expect(removeNearbyPlaces()).toEqual(expectedAction);
  });

  it('action creator for loadComments returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [],
    };

    expect(loadComments([])).toEqual(expectedAction);
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
      payload: {id: 1, newPlace: 'newPlace'},
    };

    expect(changeFavorite(1, 'newPlace')).toEqual(expectedAction);
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
