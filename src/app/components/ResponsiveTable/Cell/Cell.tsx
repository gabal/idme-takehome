import { ColumnI } from '@/app/types/responsiveTable';
import styles from './cell.module.css';

export const Cell = ({ column, data }: { column: ColumnI, data: any }) => {
    if (column?.component) {
        const Component = column.component;
        return <div className={styles.cell}><Component {...data} /></div>;
    }
    if (column?.valueGetter) {
        return <div className={styles.cell}>{column?.valueGetter(data)}</div>
    }
    return <div className={styles.cell}>{column?.field ? data?.[column.field] : ''}</div>;
}
