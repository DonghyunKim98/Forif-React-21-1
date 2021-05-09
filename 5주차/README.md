# 5주차 스터디

- [https://ko.reactjs.org/docs/hello-world.html](https://ko.reactjs.org/docs/hello-world.html)
- 헷갈리는 부분은 이 파일보다도 공식문서를 확인!!

## ① React - CRA 를 이용하여 프로젝트 생성

- 0주차 스터디 참고

## ② React - Component , JSX

### 컴포넌트를 표현하는 JSX

- **HTML 형식**과 **XML 형식**을 이용해서 화면에 랜더링하는 형식
- element의 끝에 마침 표시 **'/>'** 가 있어야 함
- 개발자는 JSX만 작성, 리액트 엔진은 `React.createELement()` 를 이용해서 DOM을 생성
- **JSX를 사용하기 위해서는 반드시 React 를 import 해야 함!**
- jsx 를 사용하는 javascript 파일은 **.jsx** 로 명시하는 것이 좋음
- JSX 예시

```jsx
//App.jsx
import React from "react";
import "./App.css";
const App=()=> {
  return (
    <div className="title">
	    Hello World!
    </div>
  );
}

export default App;
```

### JSX 와 HTML 과의 차이점

- 첫 번째 글자는 **대문자로 작성** ⇒ 기존의 HTML 마크업 문서와 구별하기 위함
- JSX에선 class 를 `className`으로 선언해야함 ⇒ JS와의 구분을 위해서
- 최상위 Root JSX 는 1개만 존재할 수 있음
    - 여러개의 root 가 필요한 경우 Array Component 를 사용하거나, 새롭게 상위 root로 묶어줘야함

    ```jsx
    // not available -> root JSX 가 2개
    return(
    	<div>Hello</div>
    	<div>World!</div>
    )

    // available 
    return(
    	<div>
    		<div>Hello</div>
    		<div>Wordl!</div>
    	</div>	
    )
    ```

### **Component의 필요성**

- MVC 모델은 각 요소의 의존성이 높아 재활용이 어려움
- 이를 보안하기 위해 **독립적으로 구성**이 가능하고, **기존의 컴포넌트를 활용해서 새로운 컴포넌트**를 쉽게 만들 수 있는 Component의 개념이 React에 도입됨.
- 독립적으로 구성된 Component 의 예시

```jsx
//App.jsx
import React from "react";
import Child from "./Child";
import "./App.css";
const App=()=> {
  return (
    <div>
      <Child/>
			<Child/>
    </div>
  );
}

export default App;
```

```jsx
//Child.jsx
import React from "react";

function Child(){
	return(
		<div>자식 컴포넌트 입니다.</div>
	)
}
```

### **Component의 주된 구성요소**

- **Property** : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 **읽기 전용 데이터**
- **State** : 컴포넌트의 상태를 저장하고 **변경할 수 있는 데이터**
- **Context** : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이트
    - context 까지 이번 스터디에서 다루기는 어려울 것 같습니다.

### Component 의 종류

- Class  Component

    ```jsx
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```

- **Function Component**

    ```jsx
    // using function declaration
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```

    ```jsx
    // using Arrow Function
    const Welcome=(props)=>{
    	return <h1>Hello, {props.name}</h1>;
    }
    ```

- Array Component →6주차에 다룰 예정
- 3~4년전까지만 해도 Class Component에서만 state 가 있었기 때문에, 90%가 넘는 component들은 class 형태로 쓰였지만, **hook 의 등장으로 function component**를 거의 모든 react 개발자들이 채용하고 있습니다.

### Property (props)

- **상위 컴포넌트에서 하위 컴포넌트에 값을 전달할 때 사용(즉 단방향)**
- 프로퍼티의 값은 **수정할 수 없음 (읽기 전용)**
- 프로퍼티의 자료형은 **객체 ⇒ 그 안의 요소를 꺼내서 쓰는 형식**
- 아래 부분은 **class형 Component와 function형 Component** 간의 차이는 존재하지 않음

<상위 컴포넌트>

```jsx
function App() {
	return ({
		<div className="body">
			<MyComponenet name="message"/> // name이란 이름으로 message라는 문자열값을 전달
		</div>
	})
}
```

<하위 컴포넌트>

```jsx
function MyComponent(props){
	name=props.name;
	render(){
		const name = this.props.name;
		return <span>{name}</span>;
	}
}
```

## ③ React- State (using hook)

### Hook 정의

- React 16.8 버젼에 추가된 **공식** 라이브러리
- Class형 컴포넌트에서만 쓸 수 있었던 **state와 life cycle을 Function형 컴포넌트에서도 사용 가능**
    - JavaScript의 **[클로저(Closer)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)** 를 이용
- 현재 공식문서에서는, Class형 컴포넌트보다는 **Function형 컴포넌트로 새로운 React 프로젝트를 만들기를 권장**
    - 단, 기존의 Class형 컴포넌트들을 Hook을 이용한 Function형 컴포넌트로 refactoring할 이유는 전혀 없음

### 왜 필요한가?

- 함수형 컴포넌트들은 기본적으로 리렌더링이 될때, **함수 안에 작성된 모든 코드가 다시 실행**됨
    - 클래스형 컴포넌트들은  method의 개념이므로, 리렌더링이 되더라도 `render()` 를 제외한 나머지 method 및 state는 그대로 보존이 되어 있음.
- 이는 함수형 컴포넌트들이 **기존에 가지고 있던 상태(state)를 전혀 관리(기억)**할 수 없게 만듦
    - 그래서 함수형 컴포넌트를 `Stateless Component` 라고 했던 것.
    - 단순하게 React에서의 `state` 만을 의미하는 것이 아닌, **함수내에 써져 있는 모든 코드 및 변수를 기억할 수 없다는 의미
    ⇒ 함수형 컴포넌트가 리렌더링될때 무조건 새롭게 선언 & 초기화 & 메모리에 할당이 됨**
- 하지만 Hook의 등장으로, 브라우저에 메모리를 할당 함으로써, **함수형 컴포넌트가 상태(state)**를 가질 수 있게 한 것. 
⇒ 쉽게 말해서 **함수 내에 써져 있는 코드 및 변수를 기억할 수 있게 됐다** 라는 의미

### 언제나 유용한가?

- 위에서 말했듯이, Hook은 브라우저의 **메모리 자원**을 쓴다.
- 따라서, **함부로 남발**했다가는 오히려 전체적인 성능 저하를 불러올 수 있다.
- Hook의 성능 최적화는 이 곳에서 다룬다.

## useState

### 정의

- React 에서 정의하는 `state` 를 Function Component에서 사용하게 해주는 Hook
- `this.state` 와 `this.setState` 를 대체

### 사용법

```jsx
const [value, setValue] = useState(0);
```

1. `useState(param)` 의 parameter : **value의 초깃값 설정**
2. `useState(param)` 의 반환 값 : 배열
    - 첫 번째 요소 ⇒ **관리할 value**
    - 두 번째 요소 ⇒ **value를 관리할 수 있는 함수** ( `this.setState()` ) 와 유사 )
        - 단, setState와 달리 **대체함(replace)**
    - 보통은 위의 예시 코드와 같이 비구조화 할당을 통해 변수에 할당함

### 성능 최적화

- **함수형 업데이트**

    ```jsx
    useState((prev)=> prev+1); // number
    useState((prev)=> {...prev, newID: newValue}) // object
    useState((prve)=> [...prev, newValue]) // array
    ```

    - `useState` 는 이전 `state` 값을 인자로 자동으로 받아오는 callback function을 인자로 넣을 수 있음.
        - 이를 함수형 업데이트라고 부름
- **함수형 업데이트를 쓰는 이유 (중요)**
    1. `useCallback` , `useMemo` **에서 성능 최적화 작업 
    ⇒ 두번째 인자로 들어가는 dependency array의 요소를 줄일 수 있음**

        ```jsx
        // state의 값이 바뀐다고, useCallback이나 useMemo를 다시 할당할 이유가 없음.
        // 그러나 아래와 같이 함수형 업데이트를 사용하지 않으면, 반드시 재할당해야함 
        // 이전 state 값을 자체적으로 가지고 있기 때문

        const onChange = useCallback(e=> {
        	const {name, value} = e.target;
        	setUser({
        		...user,
        		name: value,
        	})
        }, [user]); // 반드시 두번째 인자로 user를 넘겨줘야함
        ```

        ```jsx
        // 함수형 업데이트에서는 setState자체에서 이전 state값을 가져옴
        // 따라서 dependency로 넘겨주지 않아도 되고
        // state가 갱신될때 마다 해당 Hook을 재할당하지 않아도 됨
        const onChange = useCallback(e=> {
        	setUser((prev)=>{
        		const {name, value} = e.target;
        		return {
        			...prev,
        			name: value,
        		};
        	})
        }, []); // 더이상 user 관련하여 재할당하지 않음
        ```

    2. **이전 state 값을 가져오는 걸** **항상 보장할 수 있음**

        ```jsx
        // 아래와 같이 아예 다른 state값을 할당해야 한다면 
        // 함수형 업데이트는 필요하지 않을 수도 있음.
        const onChangeName = (event) => {
        	const newName = event.currentTarget.value;
        	setName(newName);
        };
        ```

        ```jsx
        // 하지만 대다수의 state (특히 객체와 배열) 는 이전 상태가 필요함.
        // 이 경우 함수형 업데이트가 필요함
        const onAddUser = (event) => {
        	setUser((prev)=>{
        		const newUser = event.currentTarget.value;
        		return [...prev,newUser];
        	})
        }
        ```

    3. `setState` 관련 로직이 좀 더 깔끔해짐 
    → 새로운 `state` 와 관련된 모든 로직을 `setState` 안에 넣기 때문

        ```jsx
        // not good, 깔끔하지 못한 setState
        const onClick = () =>{
        	const newId = 3;
          const newValue = "안녕하세요";
        	setState({
        		...state,
        		newID: newValue,
        	})
        }
        ```

        ```jsx
        // good, 새로운 state와 관련된 모든 로직이 setState안에 들어있어서 구분이 깔끔함
        const onClick = () => {
        	setState((prev)=>{
        		const newId = 3;
        		const newValue = "안녕하세요";
        		return {...prev, newID: newValue};
        	}
        }
        ```

### 주의점

1. `setValue` 를 쓴다고 **즉각적으로 바뀌지 않음 (비동기적)**
    - 따라서 **바뀐 `state`를 이용하는 로직을 짜야하는 경우** **반드시 `useEffect` 에서 처리**할 것!!

    ```jsx
    // bad code, count와 관련된 뒷처리 코드를 onClick에서 다 처리
    const onClick = () => {
    	setState(count+1);
    	if(count===3) alret("3 입니다!");
    }
    ```

    ```jsx
    // good code, onClick에서는 state의 갱신만, 뒷처리 코드는 useEffect에서 처리
    useEffect(()=>{
    	if(count===3) alert("3 입니다!");
    })

    const onClick = () => {
    	setState(count+1);
    }
    ```

    ⇒ `useEffect` 가 존재하는 이유이기도 함.

2. Array나 Object의 경우 `setValue` 에서 반드시 **immutable 을 지켜서, 새롭게 할당한 변수를** 넘겨줘야함 
⇒ 함수형 컴포넌트가 `state` 가 바뀌는 것을 감지할때 shallow Comparison을 이용하기 때문.
⇒ 즉, **주소값**만을 비교하기 때문에, immutability를 지키지 않고 수정을 해버리면, 바뀐지를 감지하지 못할것이고, 리렌더링 또한 진행이 안됨. 
    - **Destructor operator 를 사용하는 것을 권장** ( `[...]` )

## useEffect

### 정의

- [LifeCycle](https://www.notion.so/Component-state-Life-Cycle-in-class-component-c97ebc03131d42fd92b97b267d594517) 에서 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 를 대체
    - Component가 **re-render 될때마다 호출**
    - 즉 React 컴포넌트가 **화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과**들을 흔히 **Side Effect**라 부르는데, 이 Side Effect를 처리하기 위한 함수

### 사용 방법

```jsx
useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
  },[]);
```

1. `useEffect` 의 첫번째 parameter : rendering이 될때 **실행시킬 함수 (callback)**
    - Side Effect에 해당하는 코드들을 작성하는 곳
    - 이 함수의 **반환 값으로 뒷정리 (clean-up) 코드**를 넣어줄 수 있음
        - 해당 컴포넌트가 unmount 되거나, dependency가 바뀌어서 effect가 달라져야 할때, 이전 effect를 청소하는 용도이다. (이펙트를 *"되돌리는"* 것)
        - 이 뒷처리 코드는 다음번 `useEffect`가 실행될때 이전의 state값을 가지고 먼저 실행되게 되어 있음
        - 즉, lifeCycle 에서 `componentWillUnmount` 와 같은 포지션

        ```jsx
        useEffect(() => {
            console.log('effect');
            console.log(name);
            return () => {
              console.log('cleanup');
              console.log(name);
            };
          });
        ```

    - 최종적으로 `useEffect`가 동작하는 순서는 총 순서는 다음과 같다.
        1. React 가 새로운 state를 가지고 UI를 랜더링함
        2. 브라우저가 실제로 새로운 state를 가지고 그리기를 진행
        3. 리액트가 이전 state에 대한 이팩트를 클린업함 (클린업코드를 이용)
        4. 리액트가 새로운 state에 대한 이펙트를 실행함
2. `useEffect` 의 두번째 parameter : **배열 (dependency array)**
    - 배열 안의 **요소가 바뀔 때만** 실행 , 배열 안의 요소는 `useState()` 로 지정한 변수나 `props`
        - **빈 배열** ⇒ `componentDidMount` 일 때만 실행 (최초 랜더링시에만)

        ```jsx
        useEffect(() => {
            console.log('마운트 될 때만 실행됩니다.');
          }, []);
        ```

        - **무언가 있는 배열** ⇒ 그 변수가 바뀔때만 실행

        ```jsx
        useEffect(() => {
            console.log(name);
          }, [name]); // name이 바뀔때만 실행됨
        ```

        - 두번째 인자가 없음 ⇒ 매 렌더링때마다 실행 (avoid)
        - 성능에 정말 안 좋음.

### 성능 최적화

1. 두번째 parameter 로 들어가는 dependency array를 잘 작성해 놓기.
    - 정말 필요한 경우에만 `useEffect` 가 실행될 수 있게끔.
2. 로직별로 `useEffect` 분리하기 
    - dependency에도 영향을 줌

    ```jsx
    // bad, 모든 sideEffect를 하나의 useEffect에 넣음
    useEffect(()=>{
    	if (user.length==3) alert("3명의 유저가 있어요!");
    	if (sumbit === true) formRef.reset();
    }, [user,submit]); // user와 submit 2개의 dependency를 넣을 수 밖에 없음
    ```

    ```jsx
    // good, useEffect의 로직별 분리
    useEffect(()=>{
    	if(user.length===3) alert("3명의 유저가 있어요!");
    },[user]);

    useEffect(()=>{
    	if(submit === true) formRef.reset();
    },[submit]);
    ```

### 주의점

- 여러개의 `useEffect` 가 써져있는 경우, 위에서 부터 실행됨.
