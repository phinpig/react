import React, { useRef, useState } from 'react';
import './App.css';

export default function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onRest = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <>
            <input name='name' placeholder='이름' value={name} onChange={onChange} ref={nameInput} />
            <input name='nickname' placeholder='닉네밍' value={nickname} onChange={onChange} />
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값 : </b>
                {name} : ({nickname})
            </div>
        </>
    );
}
