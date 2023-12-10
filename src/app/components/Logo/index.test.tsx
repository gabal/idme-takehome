import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
const IMAGE_SRC = 'https://picsum.photos/id/0/200&w=96&q=75';
describe('Logo', () => {
    it('renders', () => {
        render(<Component location={IMAGE_SRC} />);
        expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching('picsum.photos%2Fid%2F0%2F200'));
    });
});
