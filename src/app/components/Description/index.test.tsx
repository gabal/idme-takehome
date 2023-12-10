import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('Description', () => {
    it('renders', () => {
        render(<Component description='connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!' />);
        expect(screen.getByText("connecting the card won't do anything, we need to back up the digital HDD driver!")).toBeInTheDocument();
    });
});
