import React, { useState } from 'react';
import './App.css';

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber((number) => number + 1);
    };
    const onDecrease = () => {
        setNumber((number) => number - 1);
    };
    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;
