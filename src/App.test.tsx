import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render h1 message', () => {
	render(<App />);
	const headingElement = screen.getByText(/testing react app/i);
	expect(headingElement).toBeInTheDocument();
});
