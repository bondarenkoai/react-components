import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import statistics from '../../data/statistics.json';
import { Stats } from './StatisticsCard/StatisticsCard';

export const Statistics = () => {
    return (
        <div className={css.statistics}>
            {statistics.map((innerArray, index) => (
                <Stats key={index} data={innerArray} />
            ))}
        </div>
    );
};

Statistics.propTypes = {
    statistics: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            })
        )
    ),
};
