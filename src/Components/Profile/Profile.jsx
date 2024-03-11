import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import css from './Profile.module.css';
import users from '../../data/users.json';

export const Profile = () => {
    return (
        <div className={css.profilePosition}>
            {users.map(user => (
                <div className={css.profile}>
                    <Description
                        username={user.username}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                    />
                    <Stats stats={user.stats} />
                </div>
            ))}
        </div>
    );
};
