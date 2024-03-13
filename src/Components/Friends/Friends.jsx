import css from './Friends.module.css';
import { FriendsCard } from './FriendsCard/FriendsCard';

export const Friends = () => {
    return (
        <ul className={css.friendList}>
            <FriendsCard  />
        </ul>
    );
};
