import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('toggles the profile card', () => {
  render(<App />);
  expect(screen.queryByText('melvin mark')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /show profile/i }));
  expect(screen.getByText('melvin mark')).toBeInTheDocument();
});
