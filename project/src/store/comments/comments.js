import { ActionType } from '../actions';

const initialState = {
  comments: [],
  isCommentsLoaded: false,
};

const comments = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export { comments };
