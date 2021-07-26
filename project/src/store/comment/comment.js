import {ActionType} from '../actions';

const initialState = {
  isCommentSending: false,
  isCommentFormSendedSuccessfully: null,
  isShowCommentErrorMessage: false,
  commentErrorMessage: null,
};

const comment = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export {comment};
