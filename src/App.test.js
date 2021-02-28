import { render, screen } from '@testing-library/react';
import App from './App';

test('renders City Bikes link', () => {
  render(<App />);
  const linkElement = screen.getByText(/City Bikes/i);
  expect(linkElement).toBeInTheDocument();
});
