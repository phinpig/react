import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0, z: 0 });
  function mouseMove(e) {
    //setMousePointer({ x: e.clientX, y: e.clientY });
    // 만약 수평을만 이동이 가능하다면?
    //setMousePointer((prev) => ({x:e.clientX, y:prev.y}));
    setMousePointer((prev) => ({ ...prev, x: e.clientX }));
  }

  return (
    <div className="container" onPointerMove={mouseMove}>
      <div
        className="pointer"
        style={{
          transform: `translate(${mousePointer.x}px,${mousePointer.y}px)`,
        }}
      />
    </div>
  );
}
