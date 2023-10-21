import Data from './Data';
import { render, screen } from '@testing-library/react';

// Test should check if component propperly render message with props of number and string
// Text in component should look like this "Hi, my name is Emilia and I'm 21 years old".

test('Should render Data component correctly', () => {
	render(
		<Data
			name='Emilia'
			age={21}
		/>
	);
	const textElement = screen.getByText("Hi, my name is Emilia and I'm 21 years old.");
	expect(textElement).toBeInTheDocument();
});
