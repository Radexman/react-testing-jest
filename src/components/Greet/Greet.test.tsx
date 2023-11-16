import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet renders correctly', () => {
	test('it should render guest in no prop passes', () => {
		render(<Greet />);
		const textElement = screen.getByText('Hello guest');
		expect(textElement).toBeInTheDocument();
	});

	test('it should render prop', () => {
		render(<Greet name='Emilia' />);
		const textElement = screen.getByText('Hello Emilia');
		expect(textElement).toBeInTheDocument();
	});
});
