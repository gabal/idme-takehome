import styles from './options.module.css';

export const Options = () => {
    return <div className={styles.options}>
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
            <path d="M2 4C3.10449 4 4 3.10456 4 2C4 0.895437 3.10449 0 2 0C0.895508 0 0 0.895437 0 2C0 3.10456 0.895508 4 2 4Z" fill="#6B6C7E" />
            <path d="M4 7.98438C4 9.08894 3.10449 9.98438 2 9.98438C0.895508 9.98438 0 9.08894 0 7.98438C0 6.87981 0.895508 5.98438 2 5.98438C3.10449 5.98438 4 6.87981 4 7.98438Z" fill="#6B6C7E" />
            <path d="M4 14C4 15.1046 3.10449 16 2 16C0.895508 16 0 15.1046 0 14C0 12.8954 0.895508 12 2 12C3.10449 12 4 12.8954 4 14Z" fill="#6B6C7E" />
        </svg>
    </div>;
}
