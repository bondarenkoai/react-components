import css from './StatisticsCard.module.css';
import getRandomTitle from '../getRandomTitle';

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Stats = ({ data }) => {
    const title = getRandomTitle();

    return (
        <div className={css.statsContainer}>
            {title && <h2 className="title">{title}</h2>}
            <div className={css.stats}>
                <ul className={css.statsList}>
                    {data.map(({ id, label, percentage }, index) => (
                        <li
                            className={css.statsItem}
                            id={id}
                            key={index}
                            style={{ backgroundColor: getRandomColor(), width: `${percentage}%` }}
                        >
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
