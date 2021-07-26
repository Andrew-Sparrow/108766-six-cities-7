import {NameSpace} from '../root-reducer';

export const getComments = (state) => state[NameSpace.COMMENTS].comments;
export const getIsCommentsLoaded = (state) => state[NameSpace.COMMENTS].isCommentsLoaded;
