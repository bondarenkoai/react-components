import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    console.log(items);

    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Invoice</td>
                    <td>125</td>
                    <td>USD</td>
                </tr>
                <tr>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
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
