import { LineChart } from "@mui/x-charts";
import styles from './graph.module.css'

const Graph: React.FC = () => {

    const data = [
        { date: 'Oct 1', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
        { date: 'Oct 7', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
        { date: 'Oct 14', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
        { date: 'Oct 21', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
        { date: 'Oct 28', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
        { date: 'Nov 4', clicks: 11, pricePerClick: '$50.00', sourceType: 'mobile' },
    ];

    const dateList = data.map(item => item.date);
    console.log("Date list: " + dateList);


    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                Clicks
            </div>
            <LineChart
                xAxis={[
                    { scaleType: 'point', data: dateList }
                ]}
                series={[
                    {
                        data: [2, 5, 2, 8, 1, 5],
                        label: 'mobile'
                    },
                    {
                        data: [6, 3, 6, 3, 10, 6],
                        label: 'desktop'
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