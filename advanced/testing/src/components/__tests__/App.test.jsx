import { render, unmountComponentAtNode } from 'react-dom';
import App from '../App';

it('renders a comment box', () => {
  const div = document.createElement('div');

  render(<App />, div);

  expect(div.innerHTML).toContain('Comment Box');

  unmountComponentAtNode(div);
});
