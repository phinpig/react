# react

2013. 5. 오픈소스
2015. 5 React native 모바일에서 사용할수 있게
2019 11. 함수형 컴포넌트(Hooks) 이전까지 class
2022 5. ssr

## 왜 리액트인가
- 사용자 화면을 만들기 위한 자바스크립트 라이브러리
- 웹 모바일 앱을 손쉽게 만들수 있게 해줌
- 심플한 정적 사이트 부터 복잡한 규모까지!
- SPA(Single Page Application), CSR(client Side Rendering),SSG/R

## 라이브러리와 프레임워크 차이점
- Frameworks = 정해진 틀안에서 제작(Routing, ui, Http Clients, State management)
  - 안드로이드, NGULAR
- Libraries - 필요에 따라서 선택하여 사용할수 있다.   ex) ui => react

## 리액트 철학

A Javascript library for building user interfaces 
Renders UI and responds to(reacts to) events 
ui를 components로 보여주고 이벤트에 반응
컴포넌트들의 집합(다른 컴포넌트와 독립적이고 재사용성이 높아야 한다) 

## 컴포넌트 나누는 기준?
- 재사용성(DRY Don't Repeat Yourself)
- 단일책임 SR(Single Responsibility)

## 리액트 동작원리 
```
사용하는 곳
<CounterButton name="드림코더"/>;
```
함수형 컴포넌트
```
export function CounterButton(props){
    const [count, setCount] = useState(0);    
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <button onclick onClick={() => setCount((count) => count + 1)}}>{count}</button>
        </div>
    )
}
```
데이터를 State(내부상태) Props(외부로부터 전달받은 상태) 나타내는 render가 있다.
상태가 변경될때마다 re-render 된다.
실제로 변경된 부분만 화면에 업데이트 된다.

## 리엑트 훅이란?
### 클래스 컴포넌트의 단점들
- 클래스는 어려워
- this 바인딩 이슈
- 로직들을 재사용 하기 어려움

React Hooks : 재사용 가능한 함수들,
    - use~  ex) useState, useEffect, useRef, useMemo, useCallback, usecontext....
    - Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재사용을 위한것이다.





## 개발 환경 설정
크롬 스토어 익스텐션
React Developer Tools

https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
https://inpa.tistory.com/entry/VS-Code-%E2%8F%B1%EF%B8%8F-HTML-CSS-%EB%8F%84%EA%B5%AC-%EC%B6%94%EC%B2%9C#HTML_to_CSS_autocompletion

참고할 사이트 (중요!)

React 공식 사이트: https://reactjs.org/

React 베타 문서: https://beta.reactjs.org/

Create React App: https://create-react-app.dev/