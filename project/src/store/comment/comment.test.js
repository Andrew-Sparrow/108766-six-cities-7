import {comment} from './comment';
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

describe('Reducer: comment', () => {
  it('without additional parameters should return initial state', () => {
    expect(comment(undefined, {})).toEqual(initialState);
  });

  it('should change loading comment process status', () => {
    const newState = {
      isCommentSending: true,
      isCommentFormSendedSuccessfully: null,
      isShowCommentErrorMessage: false,
      commentErrorMessage: null,
    };

    const changeLoadingCommentProcessStatusAction = changeLoadingCommentProcessStatus(true);
    expect(comment(initialState, changeLoadingCommentProcessStatusAction)).toEqual(newState);
  });

  it('should change comment sended successfully status', () => {
    const newState = {
      isCommentSending: false,
      isCommentFormSendedSuccessfully: true,
      isShowCommentErrorMessage: false,
      commentErrorMessage: null,
    };

    const changeIsCommentSendedSuccessfullyStatusAction = changeIsCommentSendedSuccessfullyStatus(true);
    expect(comment(initialState, changeIsCommentSendedSuccessfullyStatusAction)).toEqual(newState);
  });

  it('should change show error comment form message status', () => {
    const newState = {
      isCommentSending: false,
      isCommentFormSendedSuccessfully: null,
      isShowCommentErrorMessage: true,
      commentErrorMessage: 'errorMessageText',
    };

    const changeShowErrorCommentFormMessageAction = showErrorCommentFormMessage(true, 'errorMessageText');
    expect(comment(initialState, changeShowErrorCommentFormMessageAction)).toEqual(newState);
  });
});
