// map 은 배열 안의 각 원소를 변환 할 때 사용되며, 이 과정에서 새로운 배열이 만들어진다.

// findIndex 
// 만약에 배열 안에 있는 값이 숫자, 문자열, 또는 블리언이라면 찾고자하는 항목이 몇번째 원소인지
// 알아내려면 indexOf를 사용하면 됩니다. 하지만, 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf로
//탖을 수 없다.

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
const index = todos.findIndex(todo => todo.id === 3)


find
find 함수는 findIndex 랑 비슷한테, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값자체를 반환합니다.

const todo = todos.find(todo => todo.id === 3)
console.log(todo)
//{id: 3, text: '객체와 배열 배우기', done: true}