import css from './App.module.css';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export default function App() {
    return (
        <div className={css.container}>
            <Profile />
            <Statistics />
        </div>
    );
}
