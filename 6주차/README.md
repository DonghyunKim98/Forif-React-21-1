# 6주차 스터디 (2021.05.29)

## 지난주 과제 설명

- `App.css` - 시계만 관련된 CSS 는 4주차 스터디를 참고

```css
:root {
  --light: #92DE34;
  --dark: #69BC22;
  --text: #025600;
  --colorShadeA: rgb(106, 163, 137);
  --colorShadeB: rgb(121, 186, 156);
  --colorShadeC: rgb(150, 232, 195);
  --colorShadeD: rgb(187, 232, 211);
  --colorShadeE: rgb(205, 255, 232);
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
* {
  box-sizing: border-box;
}
*::before, *::after {
  box-sizing: border-box;
}

.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.clock{
  width: 100%;
}

.clockFace {
  position: relative;
  display: block;
  left: 50%;
  margin-left: -11.25rem;
  background: rgba(0,0,0,0);
  width: 22.5rem;
  height: 22.5em;
  border : 2px solid black;
  border-radius: 50%;
}
.clockLine {
  position: relative;
  width: 50%;
  height: 3px;
  left: 50%;
  top: 50%;
  background: gray;
  transform-origin: left center;
  transform: rotate(-90deg);
}

.input{
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  width : 15rem;
}

.upDownBtns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.upDownBtns > button {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #92DE34;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #025600;
  background-size: 100% 100%;
  box-shadow: 0 0 0 7px var(--light) inset;
}

.upDownBtns > span {
  font-size: 2rem;
  margin: 1rem 1rem;
  color: blue;
}

.upDownBtns > button:hover {
  background-image: linear-gradient(
    145deg,
    transparent 10%,
    var(--dark) 10% 20%,
    transparent 20% 30%,
    var(--dark) 30% 40%,
    transparent 40% 50%,
    var(--dark) 50% 60%,
    transparent 60% 70%,
    var(--dark) 70% 80%,
    transparent 80% 90%,
    var(--dark) 90% 100%
  );
  animation: background 3s linear infinite;
}

.startBtn > button {
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color:var(--colorShadeA);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
}

button.startBtn {
  padding: 1em 1.5em;
  border: 2px solid var(--colorShadeA);
  border-radius: 1em;
  background: var(--colorShadeE);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
}
button.startBtn::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--colorShadeC);
  border-radius: inherit;
  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.75em 0 0 var(--colorShadeA);
  transform: translate3d(0, 0.75em, -1em);
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
}

button.startBtn:hover {
  background: var(--colorShadeD);
  transform: translate(0, 0.375em);
}

button.startBtn:hover::before {
  transform: translate3d(0, 0.75em, -1em);
}

button.startBtn:active {
  transform: translate(0em, 0.75em);
}

button.startBtn:active::before {
  transform: translate3d(0, 0, -1em);
  box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeB);
}

@keyframes background {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
}
```

- `App.jsx`

```jsx
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const title = "Round Timer";

function App() {
  const [time, setTime] = useState(0);
  const [isStartTimer, setIsStartTimer] = useState(false);
  const clockLine = useRef();
  const upBtn = useRef();
  const downBtn = useRef();
  useEffect(()=>{
    const degrees = time*6 -90;
    clockLine.current.style.transform=`rotate(${degrees}deg`
  },[time]);
  useEffect(()=>{
    if(isStartTimer===false) {
      upBtn.current.disabled=false;
      downBtn.current.disabled=false;
      return;
    }
    if(time===0) {
      setIsStartTimer(false);
      return;
    }
    const timer = setInterval(()=>{
      setTime((prev)=>prev-1);
    },1000)
    return () => clearInterval(timer);
  },[isStartTimer,time])
  const upBtnClickListener = () => {
    if (time === 60) return;
    setTime(time + 1);
  };
  const downBtnClickListener = () => {
    if (time === 0) return;
    setTime(time - 1);
  };
  const startBtnClickListener = () => {
    upBtn.current.disabled=true;
    downBtn.current.disabled=true;
    setIsStartTimer(true);
  };
  return (
    <div className="contents">
      <header>
        <h1>
          <div>{title}</div>
        </h1>
      </header>
      <div className="clock">
        <span className="clockFace">
          <div ref={clockLine} className="clockLine"></div>
        </span>
      </div>
      <div className="input">
        <div className="upDownBtns">
          <button ref={upBtn} onClick={upBtnClickListener}>+</button>
          <span>{time}</span>
          <button ref={downBtn} onClick={downBtnClickListener}>-</button>
        </div>
        <div className="startBtn">
          <button onClick={startBtnClickListener} className="startBtn">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
```

## React - ① JSX

### Array Component

- [https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components](https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components)
- element 모음을 만들고, 중괄호를 이용해서 JSX에 포함시킬 수 있음
- `map()` 함수 이용
- 이때, 반드시 **모든 node에는 key값**이 존재해야함
    - key값은 **고유한 배열 항목**을 사용해야함
        - index는 사용하지 말 것!! → 기존의 컴포넌트를 재활용하지 못할 가능성이 큼. (계속해서 변화하니깐)
    - **배열을 만드는 단계에서 key값**을 설정해야함
    - 가장 기본적인 key 값 설정 방식은 **배열의 원소가 만들이어진 시간** 을 넣는 것
- 배열 컴포넌트 예시

```jsx
function NumberList(props) {
  const numbers = [1,2,3,4,5]
  const listItems = numbers.map((number) =>
    <li key={number.toString()}> //반드시 이 자리에 이런식으로 명시해야함!
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
```

### **React.Fragment**

- [https://ko.reactjs.org/docs/fragments.html#short-syntax](https://ko.reactjs.org/docs/fragments.html#short-syntax)
- **여러 개의 컴포넌트를 반환**하기 위한 문법

```jsx
function Columns() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    )
}
```

- 아래와 같이 단축 문법을 제공 (빈괄호만 사용)

```jsx
function Columns() {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

## React - ② Property

### **Property -  정의**

- **상위 컴포넌트에서 하위 컴포넌트에 값을 전달할 때 사용(즉 단방향)**
- 프로퍼티의 값은 **수정할 수 없음 (읽기 전용)**
- 프로퍼티의 자료형은 **객체 ⇒ 그 안의 요소를 꺼내서 쓰는 형식**
- <상위 컴포넌트>

```jsx
function App(){
	return (
		<div className="body">
			<MyComponenet name="message"/> // name이란 이름으로 message라는 문자열값을 전달
		</div>
	)
}
```

- <하위 컴포넌트> → 인자로 `props` 가 넘어옴

```jsx

function MyComponent(props){
	const name = props.name;
	return (
		<span>{name}</span>;
	)
}
```

- [구조 분해 할당식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 이용해, 하위 컴포넌트에서는 더 간단하게 꺼낼 수 있음

```jsx
// 방식 ①
function MyComponent(props){
	const {name} = props;
	return (<span>{name}</span>;
	)
}

// 방식 ② 
function MyComponent(props: {name}){
	return (<span>{name}</span>);
}
```

### Property - 자료형 선언

- `**prop-types**` 를 이용하기
- `import Proptypes from 'prop-types';` 를 명시해야 함

```jsx
import React from 'react';
import Proptypes from 'prop-types';

function PropsComponent(props){
    render() {
        return (
            <div className="message-container">
                {props.name}
            </div>
        );
    }
}

PropsComponent.propTypes ={
    name: Proptypes.string, // name은 반드시 string 이여야 함
}
export default PropsComponent;
```

### Property - **다양한 프로퍼티 사용하기**

- 리액트에서 문자열 외의 값은 **중괄호 사용**

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent (props) {
	const {
		boolValue,
	  numValue,
		arrayValue,
		objValue,
		nodeValue,
		funcValue,
} = props;
	return (
	<div>
		<span>불리언값:{boolValue}</span>
		<span>숫자값:{numValue}</span>
		<span>배열값:{arrayValue}</span>
		<span>객체값:{String(objValue)}</span>
		<span>노드값:{nodeValue}</span>
		 <span>함수값:{String(funcValue)}</span>
</div>);
    }
}

ChildComponent.propTypes = {
    boolValue : PropTypes.bool,
    numValue : PropTypes.number,
    arrayValue : PropTypes.arrayOf(PropTypes.number),
    objValue : PropTypes.object,
    nodeValue : PropTypes.node,
    funcValue : PropTypes.func,
}
export default ChildComponent;
```

### Property - **boolean Property 사용**

- Property에 **이름만 선언**하면 ⇒ **True 값** 전달
- Property에 **선언조차 안**하면 ⇒ **False 값** 전달
- 자식 Component에서 프로퍼티 자체를 생략하면 ⇒ **undefined 전달**

```jsx
// App.jsx
import React from "react";
import BooleanComponent from "./03/BooleanComponent";
import "./App.css";

function App()=> {
  return (
    <div>
      <div><b>지루할 때:</b><BooleanComponent bored/></div> //Proeperty 전달
      <div><b>즐거울 때:</b><BooleanComponent/></div> // Property 전달 X
    </div>
  );
}

export default App;
```

```jsx
// BooleanComponent.jsx
import React from 'react';

function BooleanComponent (props) {
	const {message} = props;
	return (
	<div className="message-container">
		{message}
	</div>);
}

export default BooleanComponent;
```

### **Property - 객체 프로퍼티 & 필수 프로퍼티 사용하기**

- 객체 프로퍼티 ⇒ `Proptypes.shape` 사용
- 필수 프로퍼티 ⇒  `isRequired` 를 사용

```jsx
RequiredProps.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티
  requiredStirngValue: PropTypes.string.isRequired,
};
```

### **Property -   Default value**

- `defaultProps` 이용

```jsx
DefaultPropsComponent.defaultProps={
    boolValue : false,
}
```

## React - ③ Lifting State up (State 끌어올리기)

### 하위 컴포넌트에서 Props 변경하기

- 공식사이트 : [https://ko.reactjs.org/docs/handling-events.html](https://ko.reactjs.org/docs/handling-events.html)
- property를 사용하면 상위 컴포넌트 → 하위 컴포넌트로의 데이터 전송이 가능
- 하지만 property는 읽기전용이여서 **하위 컴포넌트에서 수정**이 **불가능**
    - 하위 컴포넌트에서 수정을 하고 싶다면, **수정할 수 있는 함수를 하위 컴포넌트에 제공**

```jsx
// App.jsx
function CounterApp(){
	const [count,setCount] = useState();
	const increaseCount = () => {
		setState(prev=>prev+1);
	}
	return(
		<Counter count={count} onAdd={increaseCount}/>
	)

}
```

```jsx
// Counter2.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Counter2(props) {
    return (
      <div>
        현재 카운트: {props.count}
        <button onClick={() => props.onAdd()}>
			      카운트 증가
        </button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
```

## 6주차 스터디 과제

- Todo List 작성
    - 필수
        - 새로운 todo 추가
        - 기존 todo 삭제
    - 선택
        - 전체 todo 개수 보여주기
        - 하나의 todo 개수 자체를 늘리기
