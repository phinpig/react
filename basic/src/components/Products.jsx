import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Products() {
    // const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);
    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        //unmout시 실행 - 클리어
        return () => {
            console.log('깨끗하게 청소하는 일들을 합니다.');
        };
    }, [checked]);

    return (
        <>
            <input type='checkbox' id='checkbox' value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only hot Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
        </>
    );
}
