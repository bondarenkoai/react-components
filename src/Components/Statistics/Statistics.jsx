import css from './Statistics.module.css';
import statistics from '../../data/statistics.json';
import { Stats } from './StatisticsTitle/StatisticsTitle';

export const Statistics = () => {
    return (
        <div className={css.statistics}>
            {statistics.map((innerArray, index) => (
                <Stats key={index} data={innerArray} />
            ))}
        </div>
    );
};
