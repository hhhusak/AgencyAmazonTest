// Item.tsx
import React from 'react';
import styles from './item.module.css';
import { PerformanceData } from '../../types/types';

const Item: React.FC<PerformanceData> = ({ date, clicks, pricePerClick, sourceType }) => {
    return (
        <li className={styles.tableRow}>
            <div className={styles.tableCell}>{date}</div>
            <div className={styles.tableCell}>{clicks}</div>
            <div className={styles.tableCell}>${pricePerClick}</div>
            <div className={styles.tableCell}>{sourceType}</div>
        </li>
    );
};

export default Item;
