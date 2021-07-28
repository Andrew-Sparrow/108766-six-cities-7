import {createReducer} from '@reduxjs/toolkit';

import {
  changeLoadingCommentProcessStatus,
  changeIsCommentSendedSuccessfullyStatus,
  showErrorCommentFormMessage
} from '../actions';

const initialState = {
  isCommentSending: false,
  isCommentFormSendedSuccessfully: null,
  isShowCommentErrorMessage: false,
  commentErrorMessage: null,
};

const comment = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLoadingCommentProcessStatus, (state, action) => {
      state.isCommentSending = action.payload;
    })
    .addCase(changeIsCommentSendedSuccessfullyStatus, (state, action) => {
      state.isCommentFormSendedSuccessfully = action.payload;
    })
    .addCase(showErrorCommentFormMessage, (state, action) => {
      state.isShowCommentErrorMessage = action.payload.isShowErrorMessage;
      state.commentErrorMessage = action.payload.errorMessageText;
    });
});

export {comment};
