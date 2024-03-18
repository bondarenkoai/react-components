import css from './FriendsCard.module.css';

export const FriendsCard = ({ friends }) => {
    return (
        <div className={css.card}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item} id={id} key={id}>
                    <span className={isOnline ? css.status : css.statusOn}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </div>
    );
};
