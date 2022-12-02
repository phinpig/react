import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor(props) {
    //const [person, setPerson] = useState(data);
    const [person, dispatch] = useReducer(personReducer, data);
    function handleUpdate() {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: 'updated', prev, current });
    }
    function handleAdd() {
        const name = prompt(`멘토 이름을 넣어주세요`);
        const title = prompt(`멘토 직업을 넣어주세요`);
        dispatch({ type: 'added', name, title });
    }

    const handleDel = () => {
        const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
    };
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>엘리의 벤토는</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>

            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDel}>멘토 삭제하기</button>
        </div>
    );
}
const data = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
};
