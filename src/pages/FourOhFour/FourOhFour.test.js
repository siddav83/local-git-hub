import { default as FourOhFour } from '.';
import { screen, render } from '@testing-library/react';

describe('FourOhFour', () => {

    test('it renders', () => {
        render(<FourOhFour />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/404/i);
    });

});
