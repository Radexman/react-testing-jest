import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet component', () => {
	it('should render hello', () => {
		render(<Greet />);
		const textElement = screen.getByText('Hello');
		expect(textElement).toBeInTheDocument();
	});
});

describe('Nested', () => {
	it('should render prop name if passed', () => {
		render(<Greet name='Emilia' />);
		const textElement = screen.getByText('Hello Emilia');
		expect(textElement).toBeInTheDocument();
	});
});
