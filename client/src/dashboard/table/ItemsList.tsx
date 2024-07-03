// ItemsList.tsx
import React from 'react';
import Item from './Item';
import styles from './item.module.css';
import { PerformanceDataList } from '../../types/types';

const ItemsList: React.FC<PerformanceDataList> = ({ data }) => {
    return (
        <div className={styles.conversionTable}>
            <ul className={styles.tableHeader}>
                <li className={styles.tableRow}>
                    <div className={styles.tableCell}>DATE</div>
                    <div className={styles.tableCell}>CLICKS</div>
                    <div className={styles.tableCell}>PRICE PER CLICK</div>
                    <div className={styles.tableCell}>SOURCE TYPE</div>
                </li>
            </ul>
            <ul className={styles.tableBody}>
                {data.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default ItemsList;
