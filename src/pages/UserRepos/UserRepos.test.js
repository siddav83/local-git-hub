import { default as UserRepos } from '.';
import { screen, render } from '@testing-library/react';

describe('UserRepos', () => {

    test('it renders', () => {
        render(<UserRepos />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/userepos/i);
    });

});
