import React, { useReducer, useState } from 'react';

const initiaState = {
    count: 0,
    students: [],
};
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'del':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            };
        case 'mark':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere };
                    }
                }),
            };

        default:
            throw new Error('해당 항목이 없습니다.');
    }
}

export default function AppCheck() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initiaState);
    return (
        <>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.count}</p>
            <input
                type='text'
                placeholder='이름을 입력해주세요'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: 'add', payload: { name } });
                }}
            >
                추가
            </button>

            <ul>
                {studentsInfo.students.map((student) => (
                    <li key={student.id}>
                        <span
                            style={{
                                textDecoration: student.isHere ? 'line-through' : 'none',
                                color: student.isHere ? 'gray' : 'black',
                            }}
                            onClick={() => {
                                const id = student.id;
                                dispatch({ type: 'mark', payload: { id } });
                            }}
                        >
                            {student.name}
                        </span>
                        &nbsp;
                        <button
                            onClick={() => {
                                const id = student.id;
                                dispatch({ type: 'del', payload: { id } });
                            }}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
