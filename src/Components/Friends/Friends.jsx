import css from './Friends.module.css';
import friends from '../../data/friends.json';
import { FriendsCard } from './FriendsCard/FriendsCard';

export const Friends = () => {
    return (
        <div className={css.statistics}>
            {friends.map((innerArray, index) => (
                <FriendsCard key={index} data={innerArray} />
            ))}
        </div>
    );
};
