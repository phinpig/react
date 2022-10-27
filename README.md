# react

2013. 5. 오픈소스
2014. 5 React native 모바일에서 사용할수 있게
      2019 11. 함수형 컴포넌트(Hooks) 이전까지 class
      2022 5. ssr

## 왜 리액트인가

-   사용자 화면을 만들기 위한 자바스크립트 라이브러리
-   웹 모바일 앱을 손쉽게 만들수 있게 해줌
-   심플한 정적 사이트 부터 복잡한 규모까지!
-   SPA(Single Page Application), CSR(client Side Rendering),SSG/R

## 라이브러리와 프레임워크 차이점

-   Frameworks = 정해진 틀안에서 제작(Routing, ui, Http Clients, State management)
    -   안드로이드, NGULAR
-   Libraries - 필요에 따라서 선택하여 사용할수 있다. ex) ui => react

## 리액트 철학

A Javascript library for building user interfaces
Renders UI and responds to(reacts to) events
ui를 components로 보여주고 이벤트에 반응
컴포넌트들의 집합(다른 컴포넌트와 독립적이고 재사용성이 높아야 한다)

## 컴포넌트 나누는 기준?

-   재사용성(DRY Don't Repeat Yourself)
-   단일책임 SR(Single Responsibility)

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

-   클래스는 어려워
-   this 바인딩 이슈
-   로직들을 재사용 하기 어려움

React Hooks : 재사용 가능한 함수들, - use~ ex) useState, useEffect, useRef, useMemo, useCallback, usecontext.... - Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재사용을 위한것이다.

## 개발 환경 설정

크롬 스토어 익스텐션
React Developer Tools

https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion
https://inpa.tistory.com/entry/VS-Code-%E2%8F%B1%EF%B8%8F-HTML-CSS-%EB%8F%84%EA%B5%AC-%EC%B6%94%EC%B2%9C#HTML_to_CSS_autocompletion

참고할 사이트 (중요!)

React 공식 사이트: https://reactjs.org/

React 베타 문서: https://beta.reactjs.org/

Create React App: https://create-react-app.dev/

## JSX 문법 전리(기본)

이거 한번 읽어 보시면 좋을 것 같아요 (선택사항):

-   https://reactjs.org/docs/introducing-jsx.html
-   https://reactjs.org/docs/jsx-in-depth.html

무료 사진 사이트: https://unsplash.com/

-   App.js에서 App() 시작해야함
-   태그 하나이상일 경우 태그로 감싸야 한다. => ex)<>....</>
-   react에서 class 사용시 class => className 으로 사용해야한다.
-   스타일/변수 사용시 {} 사용해야 한다.

```
style={{ width: '200px', height: '200px' }}
{name}
```

## jsx 유용한 사이트

https://transform.tools/html-to-jsx

## Box Shadow 사이트

https://cssgenerator.org/box-shadow-css-generator.html

## event

https://reactjs.org/docs/handling-events.html

## 참고

https://cocoon1787.tistory.com/category/%E2%9A%9B%EF%B8%8FReact
https://react.vlpt.us/

## state : 컴포넌트의 상태

### useState

```
const [state,setStae] = useState(초기값);

setStae((prev) => {
    return newPrev;
});

// 입력전에 무거운 작업시 첫 랜더링만 실행되게..
useState(()=>{
    return heavyWorks();
});
```

### useEffect

1. Mount(화면에 첫 랜더링,useEffect)
2. Update(다시 랜더링,useEffect)
3. Unmount(화면이 사라질때,useEffect)

ex 1)

```
랜더링 될때 마다 실행
useEffect(()=>{
    //작업
});
```

ex2)

```
value 값이 바뀔때 실행, 빈배열([])일때 하면에 첫 렌더링 될때 실행
useEffect(()=>{
    //작업
},[value]);
```

clean up - 정리

```
    return () =>{

    }

```

### useRef(value)

1. 저장공간
2. Ref의 변화 -> No 랜더링 -> 변수들의 값이 유지됨
3. State의 변화 -> fpsejfld -> 그래도 Ref의 값은 유지됨
4. DOM 요소에 접근 focus()

```
const ref = useRef(value)
ref =>  {current:value}
```

### useContext

1. 전역적인 변수로 선언되어, 하위 자식 컴포넌트에서 사용할수 있다.(인자 전달이 필요없음)
2. Context를 사용하면 컴포넌트를 재사용하기 어려워 질수 있다.
3. Prop drilling을 피하기 위한 목적이라면 Component Compostion(컴포넌트 합성)을 먼저 고려해보자

### useMemo

1. 메모리제이션된 값을 반환한다

```
const value = useMemo(()=>{
     calculate();
},[item])
```

### useCallback

1. 메모리제이션된 함수를 반환한다

```
const value = useCallback(()=>{
    return calculate();
},[item])
```

### useReducer
1. Reducer 
2. Dispatch
3. Action

