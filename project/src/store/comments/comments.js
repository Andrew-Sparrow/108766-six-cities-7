import {createReducer} from '@reduxjs/toolkit';
import {loadComments, removeComments} from '../actions';

const initialState = {
  comments: [],
  isCommentsLoaded: false,
};

const comments = createReducer(initialState, (builder) => {
  builder
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isCommentsLoaded = true;
    })
    .addCase(removeComments, (state) => {
      state.comments = [];
      state.isCommentsLoaded = false;
    });
});

export {comments};
