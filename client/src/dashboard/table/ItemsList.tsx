import React from 'react';
import Item from './Item';
import styles from './item.module.css';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const ItemsList: React.FC = () => {

    const data = useSelector((state: RootState) => state.performance.items);

    return (
        <div className={styles.conversionTable}>
            <ul className={styles.tableHeader}>
                <li className={styles.tableRow}>
                    <div className={styles.tableCell}>DATE</div>
                    <div className={styles.tableCell}>CLICKS</div>
                    <div className={styles.tableCell}>PRICE PER CLICK</div>
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
