import { render, screen } from '@testing-library/react';
import App from './App';

test('renders titulo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quieres Adoptar uno de Nuestros Adorables Mistyc/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders titulo 2', () => {
  render(<App />);
  const linkElement = screen.findAllByText(/nuestros adorables amigos/i);
  expect(linkElement).toBeDefined();
});

test('renders button adoptame', () => {
  render(<App />);
  const linkElement = screen.findAllByText(/adoptame/i);
  expect(linkElement).toBeDefined();
});
