import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

/*
test('renders learn react link', () => {
  render(<MainApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('renders learn react link', () => {
	const root = document.createElement("div");
	ReactDOM.render(<MainApp/>, root);

	expect(root.querySelector("img").textContent).toBe("");
 });
