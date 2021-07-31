import {
  ActionType,
  changeLoadingCommentProcessStatus
  // changeIsCommentSendedSuccessfullyStatus,
  // showErrorCommentFormMessage,
  // changeCity,
  // loadPlaces,
  // loadNearbyPlaces,
  // removeNearbyPlaces,
  // loadComments,
  // removeComments,
  // changeAuthorizationStatus,
  // changeLogin,
  // changeFavorite,
  // logout,
  // resetFavorites,
  // redirectToRoute
} from './actions';

describe('Actions', () => {
  it('action creator for change loading comment process status returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS,
      payload: true,
    };

    expect(changeLoadingCommentProcessStatus(true)).toEqual(expectedAction);
  });
});
