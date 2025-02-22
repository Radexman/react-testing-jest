import { render, screen } from '@testing-library/react';
import Application from './Application';

describe('Application', () => {
	test('should render correctly', () => {
		render(<Application />);

		const pageHeading = screen.getByRole('heading', {
			name: 'Job Application Form',
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole('heading', {
			name: 'Section One',
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement = screen.getByRole('textbox', {
			name: 'Name',
		});
		expect(nameElement).toBeInTheDocument();

		const nameElementTwo = screen.getByLabelText('Name', {
			selector: 'input',
		});
		expect(nameElementTwo).toBeInTheDocument();

		const nameElementThree = screen.getByPlaceholderText('Fullname');
		expect(nameElementThree).toBeInTheDocument();

		const nameElementFour = screen.getByDisplayValue('Radek');
		expect(nameElementFour).toBeInTheDocument();

		const imageElement = screen.getByAltText('a person with a laptop');
		expect(imageElement).toBeInTheDocument();

		const spanElement = screen.getByTitle('close');
		expect(spanElement).toBeInTheDocument();

		const customComponent = screen.getByTestId('custom-element');
		expect(customComponent).toBeInTheDocument();

		const paragraphElement = screen.getByText('All fields are mandatory', {
			selector: 'p',
		});
		expect(paragraphElement).toBeInTheDocument();

		const bioElement = screen.getByRole('textbox', {
			name: 'Bio',
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole('combobox');
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole('checkbox');
		expect(termsElement).toBeInTheDocument();

		const termsElementTwo = screen.getByLabelText('I agree to terms and conditions');
		expect(termsElementTwo).toBeInTheDocument();

		const submitElement = screen.getByRole('button');
		expect(submitElement).toBeInTheDocument();
	});
});
