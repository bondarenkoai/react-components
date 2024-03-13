import css from './FriendsCard.module.css';

export const FriendsCard = ({ data }) => {
    return <div>HEllo</div>;
};

// {
//         "avatar": "https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg",
//         "name": "Alex Johnson",
//         "isOnline": true,
//         "id": 1812
//     },

{
    /* <div className={css.statsContainer}>
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
        </div> */
}
