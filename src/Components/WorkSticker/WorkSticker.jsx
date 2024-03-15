import css from './App.module.css';
import data from './WorkSticker/placeName.json';

const processedData = data.map(item => {
    return {
        ...item,
        name: item.name.substring(0, 17).padEnd(17),
    };
});

const flush = processedData.filter(item => item.method === 'Змив');
const imprint = processedData.filter(item => item.method === 'Відбиток');

console.log(flush);
console.log(imprint);

export default function App() {
    return (
        <div className={css.container}>
            {flush.map(({ id, name }) => (
                <div key={id}>
                    <div>14.03.2024</div>
                    <div>5.3---{id}</div>
                    <div>{name}</div>
                    <div>ф/с</div>
                </div>
            ))}
            {imprint.map(({ id, name }) => (
                <div key={id}>
                    <div>14.03.2024</div>
                    <div>5.3---{id}</div>
                    <div>{name}</div>
                    <div>ф/с</div>
                </div>
            ))}
        </div>
    );
}

// const processedData = data.map(item => (
//     <div className={css.item} key={item}>
//         {item.substring(0, 22).padEnd(22)}
//     </div>
// ));

// export default function App() {
//     return (
//         <div className={css.container}>
//             {processedData.map((item, index) => (
//                 <React.Fragment key={index}>
//                     <div>14.03.2024</div>
//                     <div>5.3---{numOfRoom[index]}</div>
//                     <div>{item}</div>
//                     <div>500л.</div>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }
