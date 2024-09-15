import { default as Repo } from '.';
import { screen, render } from '@testing-library/react';

describe('Repo', () => {

    test('it renders', () => {
        render(<Repo />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/repo/i);
    });

});
