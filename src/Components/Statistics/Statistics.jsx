import css from './Statistics.module.css';
// import statistics from '../../data/statistics.json';
import { Stats } from './StatisticsTitle/StatisticsTitle';

export const Statistics = () => {
    return (
        <div className={css.statistics}>
            <h2 className="title">Upload stats</h2>
            <Stats />
        </div>
    );
};
