import css from './App.module.css';
import { Profile } from './Profile/Profile';

export default function App() {
    return (
        <div className={css.container}>
            <Profile />
        </div>
    );
}
