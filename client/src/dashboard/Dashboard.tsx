import React, { useEffect } from 'react';
import Graph from './graph/Graph';
import ItemsList from './table/ItemsList';

import styles from './dashboard.module.css';
import { PerformanceData } from '../types/types';
import { useDispatch } from 'react-redux';
import { setPerformanceData } from '../store/performanceSlice';

const Dashboard: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/performance");
                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }
                const result: PerformanceData[] = await response.json();
                dispatch(setPerformanceData(result));
            } catch (error) {
                throw new Error(`${error}`);
            }
        }

        fetchData()

    }, [dispatch])

    return (
        <>
            <div className={styles.dashboard}>
                <Graph />
            </div>
            <ItemsList />
        </>
    );
};

export default Dashboard;
