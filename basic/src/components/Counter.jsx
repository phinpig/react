import React, { useState } from 'react';

export default function Counter({ total, totalCount }) {
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <span className='number'>
                {count}/{total}
            </span>
            <button
                className='button'
                onClick={() => {
                    setCount((prev) => prev + 1);
                    totalCount();
                }}
            >
                Add +
            </button>
        </div>
    );
}
