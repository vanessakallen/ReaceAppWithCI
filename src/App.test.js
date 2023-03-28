import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders h1 text', () => {
  render(<App />);
  const textContent = screen.getByText("Blogging App");
  expect(textContent).toBeInTheDocument();
});
