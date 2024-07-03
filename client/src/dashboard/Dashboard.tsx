// src/components/Dashboard.tsx

import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <LineChart
                xAxis={[
                    { data: [1, 2, 3, 5, 8, 10] }
                ]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [6, 6, 6, 3, 10, 6],
                    },
                ]}
                width={700}
                height={400}
                grid={{ horizontal: true }}
            />
        </div>
    );
};

export default Dashboard;
