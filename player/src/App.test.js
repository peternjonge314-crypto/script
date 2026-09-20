import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the player cards', () => {
  render(<App />);
  expect(screen.getByText('Lionel Messi')).toBeInTheDocument();
  expect(screen.getByText('Kylian Mbappe')).toBeInTheDocument();
});
