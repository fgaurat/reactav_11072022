import React from 'react';
import { render, screen,waitFor  } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  // const linkElement = screen.getByText("App");
  // const linkElement = screen.getByTestId("title")
  // expect(linkElement).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('App' )).toBeInTheDocument())
});


// test('renders lazy component', async () => {
//   const { getByText } = render(<LazyLoad />)
//   await waitFor(() => expect(getByText('I am lazy !' )).toBeInTheDocument())
// })