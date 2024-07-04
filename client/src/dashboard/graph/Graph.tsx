import { LineChart } from "@mui/x-charts";
import styles from './graph.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";

const Graph: React.FC = () => {
    const [toggle, setToggle] = useState<'clicks' | 'pricePerClick'>('clicks');
    const performanceData = useSelector((state: RootState) => state.performance.items);

    const dateList = performanceData.map(item => item.date);
    const clicksList = performanceData.map(item => item.clicks);
    const pricePerClick = performanceData.map(item => item.pricePerClick);
    const seriesList = toggle === 'clicks' ? clicksList : pricePerClick;

    const handleToggle = () => {
        setToggle(prevToggle => prevToggle === 'clicks' ? 'pricePerClick' : 'clicks');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.text}>
                    Analyze by
                </div>
                <button onClick={handleToggle} className={styles.toggleButton}>
                    {toggle === 'clicks' ? 'Clicks' : 'Price Per Click'}
                </button>
            </div>
            <LineChart
                xAxis={[
                    { scaleType: 'point', data: dateList }
                ]}
                series={[
                    {
                        data: seriesList,
                    },
                ]}
                width={700}
                height={400}
                grid={{ horizontal: true }}
            />
        </div>
    )
}

export default Graph;