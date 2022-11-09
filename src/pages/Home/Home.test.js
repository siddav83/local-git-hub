import { default as Hp,e } from '.';
import { screen, render } from '@testing-library/react';

describe('Home', () => {

    test('it renders', () => {
        render(<Home />)
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/home/i);
    });

});
