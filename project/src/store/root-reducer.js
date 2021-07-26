import { combineReducers } from 'redux';
import { user } from './user/user';
import { places } from './places/places';

export const NameSpace = {
  PLACES: 'PLACES',
  COMMENTS: 'COMMENTS',
  USER: 'USER',
  PLACE: 'PLACE',
  COMMENT: 'COMMENT',
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.PLACES]: places,
});
