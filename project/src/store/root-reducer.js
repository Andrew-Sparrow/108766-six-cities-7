import {combineReducers} from 'redux';
import {user} from './user/user';
import {places} from './places/places';
import {comments} from './comments/comments';
import {comment} from './comment/comment';

export const NameSpace = {
  PLACES: 'PLACES',
  COMMENTS: 'COMMENTS',
  USER: 'USER',
  COMMENT: 'COMMENT',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.PLACES]: places,
  [NameSpace.COMMENTS]: comments,
  [NameSpace.COMMENT]: comment,
});
