import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textContent = screen.getByText("Blogging App");
  expect(textContent).toBeInTheDocument();
});
