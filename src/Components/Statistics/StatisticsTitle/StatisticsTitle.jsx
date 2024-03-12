import css from './StatisticsTitle.module.css';
import statist from '../../../data/statistics.json';

// Функція для генерації випадкового кольору
const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const statistics = statist[1];

export const Stats = () => {
    return (
        <div className={css.stats}>
            {statistics.map(({ id, label, percentage }) => (
                <ul
                    className={css.statsList}
                    key={id}
                    style={{ backgroundColor: getRandomColor() }}
                >
                    <li className={css.statsItem} id={id}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                    </li>
                </ul>
            ))}
        </div>
    );
};
