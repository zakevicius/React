import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea')).toHaveLength(1);
  expect(wrapped.find('button')).toHaveLength(1);
});

describe('Comment submit form', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'comment' },
    });
    wrapped.update();
  });

  it('has a textarea that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('comment');
  });

  it('clears text area after submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
