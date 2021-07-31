import {comment} from './comment';

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
});
