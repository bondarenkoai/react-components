import css from './App.module.css';
import { Friends } from './Friends/Friends';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export default function App() {
    return (
        <div className={css.container}>
            {/* <Profile /> */}
            {/* <Statistics /> */}
            <Friends />
        </div>
    );
}
