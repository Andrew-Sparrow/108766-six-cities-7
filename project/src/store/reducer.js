import { ActionType } from './actions';

import {
  AuthorizationStatus,
  SortByValues,
  LoginValue
} from '../const';

import Utils from '../utils/utils';

const initialState = {
  activeCityName: 'Paris',
  places: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isCommentsLoaded: false,
  sortBy: SortByValues.POPULAR,
  loginValue: LoginValue.UNAUTHORIZED,
  isNearbyPlacesLoaded: false,
  commentText: '',
  commentRating: 0,
  isCommentSending: false,
  isShowCommentErrorMessage: false,
  isCommentFormSendedSuccessfully: null,
  commentErrorMessage: null,
  nearbyPlaces: [],
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_COMMENT_PROCESS_STATUS: {
      return {
        ...state,
        isCommentSending: action.payload,
      };
    }
    case ActionType.CHANGE_COMMENT_SENDED_SUCCESSFULLY_STATUS: {
      return {
        ...state,
        isCommentFormSendedSuccessfully: action.payload,
      };
    }
    case ActionType.SHOW_COMMENT_ERROR_MESSAGE: {
      return {
        ...state,
        isShowCommentErrorMessage: action.payload.isShowErrorMessage,
        commentErrorMessage: action.payload.errorMessageText,
      };
    }
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        activeCityName: action.payload,
      };
    }
    case ActionType.CHANGE_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY_PLACES:
      return {
        ...state,
        nearbyPlaces: action.payload,
        isNearbyPlacesLoaded: true,
      };
    case ActionType.REMOVE_NEARBY_PLACES:
      return {
        ...state,
        nearbyPlaces: [],
        isNearbyPlacesLoaded: false,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.REMOVE_COMMENTS:
      return {
        ...state,
        comments: [],
        isCommentsLoaded: false,
      };
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.CHANGE_FAVORITE:
      return {
        ...state,
        places: Utils.getUpdatedPlaces(action.payload.id, state.places, action.payload.newPlace),
      };
    case ActionType.CHANGE_LOGIN:
      return {
        ...state,
        loginValue: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        loginValue: LoginValue.UNAUTHORIZED,
      };
    default:
      return state;
  }
}

export { reducer };
