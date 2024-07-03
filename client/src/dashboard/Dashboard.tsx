// src/components/Dashboard.tsx

import React from 'react';
import Graph from './graph/Graph';
import ItemsList from './table/ItemsList';

import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {

    const data = [
        { date: 'Oct 5, 2022 10:33 AM', clicks: 11, pricePerClick: 50.00, sourceType: 'mobile' },
        { date: 'Oct 5, 2022 10:33 AM', clicks: 11, pricePerClick: 50.00, sourceType: 'mobile' },
        { date: 'Oct 5, 2022 10:33 AM', clicks: 11, pricePerClick: 50.00, sourceType: 'mobile' },
    ];

    return (
        <>
            <div className={styles.dashboard}>
                <Graph />
            </div>
            <ItemsList data={data} />
        </>
    );
};

export default Dashboard;
