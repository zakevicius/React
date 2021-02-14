import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Comment'
  };
  const newState = commentsReducer([], action);

  expect(newState).toEqual(['Comment']);
});

it('handle actions with unknown type', () => {
  const newState = commentsReducer([], {type: 'RANDOM_ACTION'});
  expect(newState).toEqual([]);
})