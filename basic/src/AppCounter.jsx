import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

let setNum = 0;

export default function AppCounter() {
    const [count, setCount] = useState(0);
    const totalCount = () => setCount((prev) => prev + 1);
    return (
        <div className='container'>
            <div className='banner'>
                Total Count: {count} {count > 10 ? '🔥' : '❄️'}
            </div>
            <div className='counters'>
                <Counter total={count} totalCount={totalCount} />
                <Counter total={count} totalCount={totalCount} />
            </div>
        </div>
    );
}
