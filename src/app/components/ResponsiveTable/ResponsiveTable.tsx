import { ColumnI } from '@/app/types/responsiveTable';
import Cell from './Cell';
import styles from './responsive-table.module.css';

export const ResponsiveTable = ({ data, columns }: { data: any[], columns: ColumnI[] }) => {
    return <table className={styles?.['responsive-table']}>
        <thead>
            <tr>
                {
                    columns.map((column) => {
                        return <th key={column?.field} style={column?.headerStyle}>{column?.headerName || column?.field}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                data?.map((lineItem) => {
                    return <tr key={lineItem.id}>
                        {columns.map((column) => {
                            return <td key={column?.field} className={column?.className && styles?.[column.className]} data-name={column.mobileHeaderName} style={column.style}>
                                <Cell column={column} data={lineItem} />
                            </td>
                        })}
                    </tr>
                })
            }
        </tbody>
    </table >;
}
