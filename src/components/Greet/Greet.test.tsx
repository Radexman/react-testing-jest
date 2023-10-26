import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet component', () => {
	it('should render hello', () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
});
