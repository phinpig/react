import { useImmer } from 'use-immer';
export default function AppMentorsImmer(props) {
    const [person, updeatePerson] = useImmer(data);

    function handleUpdate() {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updeatePerson((person) => {
            const mentor = person.mentors.find((m) => m.name === prev);
            mentor.name = current;
        });
    }
    function handleAdd() {
        const name = prompt(`멘토 이름을 넣어주세요`);
        const title = prompt(`멘토 직업을 넣어주세요`);
        updeatePerson((person) => {
            person.mentors.push({ name, title });
        });
    }

    const handleDel = () => {
        const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
        updeatePerson((person) => {
            const index = person.mentors.findIndex((m) => m.name === name);
            if (index < 0) return; //없을시 삭제 안함
            person.mentors.splice(index, 1);
        });
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
