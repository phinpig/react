import React, { useEffect, useRef, useState } from 'react';

export default function UseRef() {
    const [count, setCount] = useState(1);
    const countRef = useRef(0);
    //변수 관리
    useEffect(() => {
        countRef.current = countRef.current + 1;
        console.log('랜더링 수', countRef.current);
    });

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>올려</button>
        </div>
    );
}

// const [count, setCount] = useState(0);
// const countRef = useRef(0);
// let countVar = 0;
// const increaseCountState = () => {
//     setCount(count + 1);
// };
// const increaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log('Ref', countRef.current);
// };
// const increaseCountVar = () => {
//     countVar = countVar + 1;
//     console.log('var', countVar);
// };

// return (
//     <div>
//         <p>State:{count}</p>
//         <p>Ref:{countRef.current}</p>
//         <p>Var:{countVar}</p>
//         <button onClick={increaseCountState}>State 올려(랜더)</button>
//         <button onClick={increaseCountRef}>Ref 올려</button>
//         <button onClick={increaseCountVar}>Var 올려</button>
//     </div>
// );
