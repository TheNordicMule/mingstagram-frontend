import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
