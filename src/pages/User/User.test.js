import { default as User } from '.';
import { screen, render } from '@testing-library/react';

describe('User', () => {

    test('it renders', () => {
        render(<User/>)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/user/i);
    });

});
