import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './AppXY.css';

export default function AppXY() {
    const xy = document.querySelector('.container');
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    function mouseMove(e) {
        console.log(mouse.x, mouse.y);
        setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', mouseMove);

    return (
        <div className='container' onPointerMove={mouseMove}>
            <div
                className='pointer'
                style={{ transform: `translate(${mouse.x}px,${mouse.y}px)` }}
            />
        </div>
    );
}
