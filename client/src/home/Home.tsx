import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const Home: React.FC = () => {
    const performances = useSelector((state: RootState) => state.performance.items);

    return (
        <div>
            <h1>Welcome to Performance Tracker</h1>
            <p>
                Track and analyze your performance metrics with our comprehensive
                dashboard. Easily monitor your progress and make data-driven decisions
                to optimize your campaigns.
            </p>
        </div>
    );
};

export default Home;
