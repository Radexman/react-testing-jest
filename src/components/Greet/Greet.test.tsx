import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet should render correctly', () => {
	it('Should display Hello', () => {
		render(<Greet />);
		const messageElement = screen.getByText(/hello/i);
		expect(messageElement).toBeInTheDocument();
	});

	it('Should display Hello Emilia', () => {
		render(<Greet name='Emilia' />);
		const messageElement = screen.getByText('Hello Emilia');
		expect(messageElement).toBeInTheDocument();
	});
});
