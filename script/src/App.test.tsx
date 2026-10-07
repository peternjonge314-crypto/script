import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the greeting and increments the counter', () => {
  render(<App />);

  expect(screen.getByText('wagwan, TypeScript!')).toBeInTheDocument();
  expect(screen.getByText('Count: 0')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));

  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});