import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    console.log(items);

    return (
        <table className={css.table}>
            <caption className={css.caption}>A summary of all transaction</caption>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// <div className={css.card}>
//             {friends.map(({ avatar, name, isOnline, id }) => (
//                 <li className={css.item} id={id} key={id}>
//                     <span className={isOnline ? css.status : css.statusOn}></span>
//                     <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//                     <p className={css.name}>{name}</p>
//                 </li>
//             ))}
//         </div>
