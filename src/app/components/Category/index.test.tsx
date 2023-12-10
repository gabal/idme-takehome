import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('Category', () => {
    it('renders', () => {
        render(<Component category='Shopping' />);
        expect(screen.getByText('Shopping')).toHaveAttribute('style', "color: rgb(17, 134, 50); border-color: #98d4a9;");
    });

    it('renders with non existing category', () => {
        render(<Component category='Ghost' />);
        expect(screen.getByText('Ghost')).toHaveAttribute('style', "color: rgb(0, 0, 0); border-color: #cdced9;");
    });
});
