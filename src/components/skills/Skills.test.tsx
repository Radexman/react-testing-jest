import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills component should', () => {
	const skills = ['HTML', 'CSS', 'JS'];

	test('render correctly', () => {
		render(<Skills skills={skills} />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	});

	test('render list items', () => {
		render(<Skills skills={skills} />);
		const listItemElements = screen.getAllByRole('listitem');
		expect(listItemElements).toHaveLength(skills.length);
	});
});
