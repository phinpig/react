import logo from './logo.svg';
import './App.css';

export default function AppJSX() {
    const name = '승종';
    const list = ['우유', '딸기', '바나나', '요거트'];
    return (
        <>
            <h1 className='orange'>{`Hello! ${name}`}</h1>
            <h2>Hello!</h2>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            <img
                style={{ width: '200px', height: '200px' }}
                src='https://media.istockphoto.com/photos/strawberry-picture-id1128248852?b=1&k=20&m=1128248852&s=170667a&w=0&h=rZ1cziTtmN2A-__-dJjRaj5-RAuzpEw8C6zkjZpC4Vo='
                alt='딸기'
            />
        </>
    );
}
