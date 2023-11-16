import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet component should', () => {
	test('render guest if no prop passes', () => {
		render(<Greet />);
		const textElement = screen.getByText('Hello guest');
		expect(textElement).toBeInTheDocument();
	});

	test('render prop', () => {
		render(<Greet name='Emilia' />);
		const textElement = screen.getByText('Hello Emilia');
		expect(textElement).toBeInTheDocument();
	});
});
