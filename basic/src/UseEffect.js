import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

export default function UseEffect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const handleCountUpdate = () => {
        setCount((prev) => prev + 1);
    };
    const handleInputChange = (e) => {
        setName(e.target.value);
    };
    // // 랜더링 될때마다 매번 실행됨
    // useEffect(() => {
    //     console.log('랜더링');
    // });

    // // 마운팅 + count가 변화할때마다 실행
    // useEffect(() => {
    //     console.log('count 변환');
    // }, [count]);

    // // 마운팅 + namedl 변화할때마다 실행
    // useEffect(() => {
    //     console.log('name 변환');
    // }, [name]);

    // 마운팅 될떼만
    useEffect(() => {
        console.log('마운팅`');
       
        return () => {
            //해당 컴퍼넌트가 사자지면 할 작업들
        };
    }, []);
    return (
        <>
            <div>
                <button onClick={handleCountUpdate}>update</button>
                &nbsp;<span>count:{count}</span>
            </div>
            <div>
                <input type='text' value={name} onChange={handleInputChange} />
                &nbsp;<span>{name}</span>
            </div>
        </>
    );
}
