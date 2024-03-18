import css from './Transaction.module.css';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

export const Transaction = () => {
    return (
        <ul className={css.transaction}>
            <TransactionHistory items={transactions} />
        </ul>
    );
};
