import React, { useEffect, useRef } from 'react';

export default function UseRefFocus() {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);
    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}`);
        inputRef.current.value = '';
        inputRef.current.focus();
    };
    return (
        <>
            <div>useRef DOM</div>
            <input ref={inputRef} type='text' name='' placeholder='username' id='' />
            <button onClick={login}>로그인</button>
        </>
    );
}
