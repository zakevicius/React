import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('create one <li> per comment', () => {
  expect(wrapped.find('li')).toHaveLength(2);
});

it('shows a correct comment text in <li>', () => {
  expect(wrapped.render().text()).toContain(initialState.comments[0]);
  expect(wrapped.render().text()).toContain(initialState.comments[1]);
});
