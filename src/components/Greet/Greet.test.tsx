import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet should render the text hello', () => {
	it('Should render hello', () => {
		render(<Greet />);
		const textElement = screen.getByText('Hello');
		expect(textElement).toBeInTheDocument();
	});

	it('Should render prop name if passed', () => {
		render(<Greet name='Emilia' />);
		const textElement = screen.getByText('Hello Emilia');
		expect(textElement).toBeInTheDocument();
	});
});
