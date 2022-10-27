import React, { useState, useMemo } from 'react';

const hardCalculate = (number) => {
    console.log('어려운 계산');
    for (let i = 0; i < 99999999; i++) {}
    return number + 10000;
};
const easyCalculate = (number) => {
    console.log('짱 쉬운 계산');
    return number + 1;
};
export default function UseMemo() {
    const [hardnumber, setHardnumber] = useState(1);
    const [easynumber, setEasynumber] = useState(1);
    //const hardSum = hardCalculate(hardnumber);
    const hardSum = useMemo(() => {
        return hardCalculate(hardnumber);
    }, [hardnumber]);
    const easySum = easyCalculate(easynumber);
    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
                type='number'
                value={hardnumber}
                onChange={(e) => setHardnumber(parseInt(e.target.value))}
            />
            <span>+1000={hardSum}</span>
            <h3>어려운 계산기</h3>
            <input
                type='number'
                value={easynumber}
                onChange={(e) => setEasynumber(parseInt(e.target.value))}
            />
            <span>+1={easySum}</span>
        </div>
    );
}
