import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

const TestComponent = ({ name }: { name: string }) => <>Hello, {name}</>;
const getterTest = ({ name }: { name: string }) => `Hello, ${name}`;
describe('Cell', () => {
    it('renders default value', () => {
        render(<Component column={{ field: 'name' }} data={{ name: 'Data' }} />);
        expect(screen.getByText('Data')).toBeInTheDocument();
    });

    it('renders using valueGetter', () => {
        render(<Component column={{ field: 'name', valueGetter: getterTest }} data={{ name: 'Data' }} />);
        expect(screen.getByText('Hello, Data')).toBeInTheDocument();
    });

    it('renders using Component', () => {
        render(<Component column={{ field: 'name', component: TestComponent }} data={{ name: 'Data' }} />);
        expect(screen.getByText('Hello, Data')).toBeInTheDocument();
    });
});

