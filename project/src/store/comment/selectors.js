import {NameSpace} from '../root-reducer';

export const getIsCommentSending = (state) => state[NameSpace.COMMENT].isCommentSending;
export const getIsCommentFormSendedSuccessfully = (state) => state[NameSpace.COMMENT].isCommentFormSendedSuccessfully;
export const getIsShowCommentErrorMessage = (state) => state[NameSpace.COMMENT].isShowCommentErrorMessage;
export const getCommentErrorMessage = (state) => state[NameSpace.COMMENT].commentErrorMessage;
