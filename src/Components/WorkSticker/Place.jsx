import css from './App.module.css';
import data from './WorkSticker/placeName.json';
import numOfRoom from './WorkSticker/numberOfRoom.json';
import React from 'react';

const processedData = data.map(item => (
    <div className={css.item} key={item}>
        {item.substring(0, 22).padEnd(22)}
    </div>
));

export default function App() {
    return (
        <div className={css.container}>
            {processedData.map((item, index) => (
                <React.Fragment key={index}>
                    <div>14.03.2024</div>
                    <div>5.3---{numOfRoom[index]}</div>
                    <div>{item}</div>
                    <div>500л.</div>
                </React.Fragment>
            ))}
        </div>
    );
}
