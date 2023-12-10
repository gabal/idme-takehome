import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

const TEST_DATA = [{
    id: 1,
    name: 'ID.me',
    value: 3,
    category: 'SAS'
},
{
    id: 2,
    name: 'Google',
    value: 4,
    category: 'Search'
},
];
describe('ResponsiveTable', () => {
    it('renders', () => {
        const columns = [
            {
                field: 'name',
                headerName: 'Name',
            },
            {
                field: 'value',
                headerName: 'Value',
            }
        ]
        render(<Component columns={columns} data={TEST_DATA} />);
        expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Value' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'ID.me' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'Google' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: '3' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: '4' })).toBeInTheDocument();
        expect(screen.queryByRole('cell', { name: 'SAS' })).toBeNull();
        expect(screen.queryByRole('cell', { name: 'Search' })).toBeNull();
    });

    // TODO: Add tests for desktop vs mobile
});
