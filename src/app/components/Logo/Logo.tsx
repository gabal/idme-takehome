import Image from 'next/image';
import styles from './logo.module.css';

export const Logo = ({ location, name = '' }: { location: string, name?: string }) => {
    return <div className={styles?.['logo']}>
        <Image src={location} width={40} height={40} alt={name} />
    </div>;
}
