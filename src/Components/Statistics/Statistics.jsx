import css from './Statistics.module.css';
import statistics from '../../data/statistics.json';

export const Statistics = () => {
    return (
        <div className={css.statistics}>
            <p className={css.name}>{statistics[0]['figures-1'][0].id}</p>
            <p className={css.tag}>@{statistics[0]['figures-1'][0].label}</p>
            <p className={css.location}>{statistics[0]['figures-1'][0].percentage}%</p>
        </div>
    );
};
