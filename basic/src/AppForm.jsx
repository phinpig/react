import React from 'react';
import { useState } from 'react';

export default function AppForm() {
    const [form, setform] = useState({ name: '', email: '' });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>이름</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={form.name}
                    onChange={handleChange}
                />
                <label htmlFor='email'>이메일</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                />
                <button>submit</button>
            </form>
        </div>
    );
}
