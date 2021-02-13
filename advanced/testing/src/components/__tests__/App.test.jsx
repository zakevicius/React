import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders a comment box', () => {
  expect(wrapped.find(CommentBox)).toHaveLength(1);
});

it('renders a comment list', () => {
  expect(wrapped.find(CommentList)).toHaveLength(1);
});