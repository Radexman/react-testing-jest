import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Should render Hello World', () => {
	render(<Greet />);
	const textElement = screen.getByText(/hello world/i);
	expect(textElement).toBeInTheDocument();
});
