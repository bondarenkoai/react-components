import css from './Stats.module.css';

export const Stats = ({ stats: { followers, views, likes } }) => {
    return (
        <div className={css.stats}>
            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};
