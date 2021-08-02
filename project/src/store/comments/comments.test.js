import {comments} from './comments';
import {
  loadComments,
  removeComments
} from '../actions';

const initialState = {
  comments: [],
  isCommentsLoaded: false,
};

const mockComments = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4.2,
    'user': {},
  },
  {
    'comment': 'A quiet cozy and pictu by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 2.8,
    'user': {},
  },
];

describe('Reducer: comment', () => {
  it('without additional parameters should return initial state', () => {
    expect(comments(undefined, {})).toEqual(initialState);
  });

  it('should add comments', () => {
    const newState = {
      comments: mockComments,
      isCommentsLoaded: true,
    };

    const loadCommentsAction = loadComments(mockComments);
    expect(comments(initialState, loadCommentsAction)).toEqual(newState);
  });

  it('should change loading comment process status', () => {
    const newState = {
      comments: [],
      isCommentsLoaded: false,
    };

    const loadCommentsAction = removeComments();
    expect(comments(initialState, loadCommentsAction)).toEqual(newState);
  });
});
