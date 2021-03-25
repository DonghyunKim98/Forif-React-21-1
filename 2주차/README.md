# 2주차 스터디

## 📣  공지사항

1. 이번 주에는 실습 내용 파일들을 분할 할 계획입니다. 토요일 본 스터디를 진행하시는 분들은 더 복습하기 용이할 것이고, 자율 스터디 분들은 더 친절하게 공부할 수 있는 환경을 제공해드립니다.
2. 자율스터디 분들께, vscode 의 extenstion 중에 **live server** 라는 기능이 있습니다**.** 
윈도우 기준 `ctrl + shift + p` 를 누르면 vscode 의 extenstion 이 제공하는 명령어들이 뜹니다.
이 중에서 live server 를 `html` 파일을 대상으로 여시게 되면, **코드를 고칠 때마다 실시간으로 웹페이지에 반영**이 됩니다. 해당 기능을 이용해 실습과 과제를 더 편하게 진행하시기 바랍니다. 
3. 원래는 HTML 과 CSS 도 알려드릴 수 있는 부분들은 진행하고자 했으나, JavaScript 쪽 분량이 꽤 나올 것 같아서,  JS를 집중적으로 진도를 나가겠습니다.
4. 꼭 당부드리고 싶은 말이 있습니다. 개발자의 자세와 관련된 것인데,  **불편한게 있으면 해결을 시도해보라는 것** 이라는 겁니다. 
가령, 코드를 3줄이상 연속으로 동일하게 커서를 놓고 써야 할 상황이 있을 수 있습니다. 이럴 때 3줄을 연속으로 치는 것 보다는 vscode 상에서의 단축키를 이용하면 훨씬 간편합니다.
프로그래밍은 곧 소프트웨어로 불편함을 해소하는 길이라고 생각합니다. 소프트웨어 공학자라면, **불편한 것을 참지말고 해결**해보세요!

---

## CSS - Animation Effect

- 이번 주차에는 Interactive Web 을 만드는데 필수적인 요소인 CSS Animation을 알아봅니다.
- Interactive Web 은 [http://www.bing.co.kr/](http://www.bing.co.kr/) 같이, 디자인 + 동적인 요소들이 결합된 웹 사이트입니다.
    - 현직자 레벨의 Interactive Web은 [https://www.youtube.com/watch?v=cpEeqACsF_Q&t=55s](https://www.youtube.com/watch?v=cpEeqACsF_Q&t=55s) 에서 확인할 수 있습니다. (~~저는 이런거 못합니다.~~)
    - 삼성전자 사전예약 사이트들이 한국에서 가장 흔히 볼 수 있는 Interactive web 중 하나입니다. 스터디가 진행되고 있는 현재는 신제품 발매를 하지 않아 사전 예약 사이트를 확인 할 수 없지만, 나중에 한번 꼭 확인해보시기 바랍니다.
- JS를 이용하여 세세한 것을 컨트롤 할 수 있지만, 기본적인 요소들은 CSS 를 이용합니다.
    - 상술한 빙그레 사이트도 90%이상은 CSS를 이용한 것입니다.
    - HTML에서 `canvas` 라는 것을 이용하면, 더더욱 Interactive Web 을 잘 만들어 낼 수 있습니다.

---

### 1. `Transform`

- [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [https://developer.mozilla.org/ko/docs/Web/CSS/transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
- 요소에 **회전 , 크기 조절, 기울이기, 이동 효과** 등을 부여할 수 있음
- 적용할 수 있는 함수 목록 (모든 함수는 **x와 y만 지정**할 수 있음)
    - X 또는 Y축으로 확대/축소 :  `scale`
    - 지정 요소 회전 : `rotate(Ndeg)`
        - 회전각도가 (+) ⇒ 시계 방향 / (-) ⇒ 반시계 방향
        - `rotateX(Ndeg)` : 상하로 기울이기
        - `rotateY(Ndeg)` : 좌우로 기울이기
    - 지정 요소 이동 : `translate(Npx)`
    - 지정 요소 기울이기 : `skew(x축 Ndeg, y축 Ndeg)`
- **`transform-origin` :** 지정 요소의 **기준점을 변경**
    - [https://developer.mozilla.org/ko/docs/Web/CSS/transform-origin](https://developer.mozilla.org/ko/docs/Web/CSS/transform-origin)
    - px , 백분율(%) , left , center, right 중에 사용가능

---

### 2. `transition`

- [https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- 속성을 **천천히 변화**시키는 속성.
    - 즉 `transform` 등으로 style 속성이 변화한다면 어떤 속도로 변화할 지를 정하는 속성입니다.
- `transition: property timing-function duration delay | initial | inherit`
    - **property :** transition을 적용시킬 속성을 정합니다. [transition-property](https://www.codingfactory.net/10946)
    - **timing-function :** transition의 진행 속도를 정합니다. [transition-timing-function](https://www.codingfactory.net/10942)

        1. `linear` : 전환(transition) 효과가 처음부터 끝까지 일정한 속도로 진행됩니다.

        2. `ease` : 기본값으로, 전환(transition) 효과가 천천히 시작되어, 그다음에는 빨라지고, 마지막에는 다시 느려집니다.

        3. `ease-in` : 전환(transition) 효과가 천천히 시작됩니다.

        4. `ease-out` : 전환(transition) 효과가 천천히 끝납니다.

        5. `ease-in-out` : 전환(transition) 효과가 천천히 시작되어, 천천히 끝납니다.

        6. `cubic-bezier(n,n,n,n)` : 전환(transition) 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됩니다.

    - **duration :** transition의 총 시간을 정합니다. [transition-duration](https://www.codingfactory.net/10949)
    - **delay :** transition의 시직을 연기합니다. [transition-delay](https://www.codingfactory.net/10951)
    - **initial :** 기본값으로 설정합니다.
    - **inherit :** 부모 요소의 속성값을 상속받습니다.

---

### 3. `animation` 그리고 `@keyframes`

- [https://webclub.tistory.com/621](https://webclub.tistory.com/621)
- `animation` : 요소에 적용된 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜줌
    - `transition` 보다 훨씬 규모가 크고 복잡하며, 다양한 능력을 가지고 있음
    - ex) `animation : spin 2s linear infinite;`
- `animation` 의 장점
    1. JS를 모르더라도 애니메이션 생성 가능
    2. JS를 이용한 애니메이션은 잘 만들어졌더라도 성능이 좋지 못할때가 있음. CSS animation은 frame-skipping 같은 여러 기술을 활용하여 최대한 부드럽게 렌더링됨
    3. 브라우저가 애니메이션의 성능을 효율적으로 최적화할 수 있음
- `@keyframes` : 어떤 모양에서 어떤 모양으로 변할지 정의할 수 있음
    - `animation` 의 첫번째 인자로 넘겨주면 됨

---

## JavaScript - Event

- 여러분들은 자바스크립트를 왜 배우나요??
- 아마 "사용자와 웹사이트가 소통"하는 웹사이트를 만들기 위함입니다.
- 그러기 위해선, 사용자가 웹페이지에 수행하는 일련의 행위들을 코드 상에서 통제해야합니다.
    - 이를 **이벤트** 라고 부릅니다.
- 이벤트에 대해  **Big Picture**를 그려봅시다.
    1. 이벤트가 발생하는 객체가 필요합니다. 이를 `EventTarget` 이라고 합니다.
    2. 이벤트가 발생하면 어떤 이벤트인지, 이벤트가 어디서 발생했는지, 등의 정보가 필요합니다. 이러한 정보는 `Event` 객체 안에 담겨져 있습니다.
    3. 무턱대고 모든 이벤트에 반응하면 안됩니다. 가령 댓글창에서 enter를 누르면 기본적으로 개행(줄이 바뀌는 것)이 기대하지, 댓글이 등록되는 것을 원하지 않을 수 있습니다.
    이렇게 특정 이벤트에만 반응하도록 DOM을 조작하는 행위를 **`EventListener` 를 등록한다** 라고 표현합니다. 또한, EventListner에 "어떤 이벤트"를 등록할지 결졍해야 하는데, 이 "어떤 이벤트" 는 `Global Event type` 에 명시되어 있습니다

> 당연한 사실인데, 저는 이 일련의 논리를 이해하고 적용 하고자 노력합니다.   
> 하지만,  저또한 세부 인자들이나, 메소드들까지 일일히 기억하지 못합니다.   
> 가령 키보드의 ctrl 버튼을 누르면 발생하는 이벤트를 적용시키기 위해선 어떤 Global Event type인지, 정리하지 않았을 뿐더러, 기억하지도 않습니다.   
> 제가 아래에 서술한 것 이상으로 이벤트 관련 훨씬 많은 메소드와 함수들이 존재합니다.   
> 그러나 한국사 처럼 이 모든 세부 상황들을 기억할 필요는 없습니다.    
> 개발자에게 중요한 것은 **"소프트웨어적 논리"를 어떻게 구성해야 하는가** 입니다.   

---

### 1. EventTarget

- **이벤트를 받을 수 있으며,** **이벤트에 대한 listener를 가질 수 있는 객체**
- `Element`, `document`, `window` 등이 가장 대표적인 EventTarget
    - 모든 DOM은 기본적으로 EventTarget. HTML 에서 사용되는 DOM은 EventTarget에서 상속받기 시작해서 속성들을 확장해 나감.
    - 위의 서술이 이해 안 되도 괜찮습니다! 다다음주에 객체 지향에대해서 배울 거에요 🙂
- 최종적으로 상속받는 다이어그램은 다음과 같다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c19d0709-1f2a-4371-91f5-8c0c0760340f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c19d0709-1f2a-4371-91f5-8c0c0760340f/Untitled.png)

---

### 2**. EventListener 등록**

### 2-1 . `EventTarget.addEventListener()`

- [https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
- 이벤트 처리기를 등록
- 이벤트를 등록할때, 가장 recommended 되는 방법
    - HTML 요소의 이벤트 처리기 속성에 설정하거나 DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정하는 것은 비추천 된다.

    ```jsx
    // 1. not recommended
    <input type="button" onclick ="changeColor();">

    // 2. not recommended 
    const btn = document.getElementbyId("button");
    btn.onclick = changeColor();

    // 3. recommended
    const btn = document.getElementbyId("button");
    btn.addEventListener("click", changeColor); 
    ```

- 첫번째 인자 → `GlobalEventType` 이 들어옴, 즉 "어떤 이벤트"에 반응할 것인가? 를 주는 것.
- 두번째 인자 → **Callback Function** 그 이벤트가 들어왔을때 어떻게 반응할 것인가? 에 대한 함수
    - 이 콜백함수의 첫번째 인자로 **`Event`** 객체가 들어오게 됩니다.
- 세번째 인자 (optional) → **옵션 객체**. 여러가지 옵션들을 부여해서 이벤트 리스너를 더 다양하게 만들 수 있음
    1. `once` → 딱 한번만 동작하고 리스너가 자동으로 해지

    ```jsx
    const btn = document.getElementbyId("button");
    // 아래 코드와 같이 3번째 인자는 "객체" 이므로 {} 안에 넣어서 인자를 줘야함.
    btn.addEventListener("click", changeColor, {once: true}); 
    ```

---

### 2-2 `EventTarget.removeEventListener()`

- [https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)
- 이벤트 수신기를 제거 → 특정 상황 이후엔 더이상 이벤트가 필요하지 않을 수 도 있습니다!
- 첫번째 인자 → `GlobalEventType` 이 들어옴, 즉 "어떤 이벤트"에 반응할 것인가? 를 주는 것.
- 두번째 인자 → **Callback Function** 그 이벤트가 들어왔을때 어떻게 반응할 것인가? 에 대한 함수

```jsx
const btn = document.getElementbyId("button");
btn.addEventListener("click", changeColor);
btn.removeEventListener("click",changeColr); //제거
```

### 3. `Event` 객체

- [https://developer.mozilla.org/ko/docs/Web/API/Event](https://developer.mozilla.org/ko/docs/Web/API/Event)
- 이벤트가 발생했을 때, 관련된 **모든 정보가 들어가 있는 객체**
    - **`addEventListener`** 을 이용하여 이벤트를 붙일때, 두번째 인자로 들어오는 콜백 함수의 인자로 들어옴.

```jsx
const btn = document.getElementbyId("button");
btn.addEventListener("click", (event)=>{
	console.log(event); // 직접해보세요! 정말 많은 정보가 있습니다.
});
```

- 이 Event 객체를 상속받아 좀 더 많은 속성을 가지는 객체들이 있음

    ex) `KeyBoardEvent` , `MouseEvent`

- 정말 많은 method 및 property 가 있으니, 가장 대중적으로 사용하는 2가지만 소개합니다.

### 3-1 `Event.currentTarget`

- [https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
- **이벤트를 발생시킨 DOM 요소**를 가져옴.
    - 보통은 이벤트를 발생시킨 돔 요소를 이용하는 경우가 많기 때문에 가장 많이 사용됨

### 3-2 `Event.preventDefault()`

- [https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- 이미 기본으로 존재하는 이벤트 리스너를 제거한다.
    - 가령 `<a>` 태그로 링크된 글을 클릭을 할 시에, 자동으로 링크된 사이트로 넘어간다
    - 또는 마우스 우클릭을 할 경우, 브라우저가 제공하는 기본적인 `contextBox` 를 제공한다.
    - 이런 기본적인 이벤트 리스너를 제거하는 것이다.

---

### 4. GlobalEventHandlers

- [https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers](https://developer.mozilla.org/ko/docs/Web/API/GlobalEventHandlers)
- `HTMLElemet` , `Document`, `Window` 등 여러 인터페이스가 공유하는 **공통 이벤트 처리기**
    - 공통이라고 다 먹혀드는건 아니다. 예를 들어 `onchange` 는 `<input> <select> <textarea>` 3가지의 HTMLElement에서만 먹힌다.
    - 그렇지만 MDN 문서에선 GlobalEventHandler라고 하는걸 보니, 그냥 퉁치는듯
- 여기선 `on'Eventtype'` 으로 서술하지만, `**addEventListener**` 로 DOM Property에 추가할땐 첫번째 인자로 `EventType` 만 넘겨주면 된다.

    ```jsx
    inputHTML.onClick = ()=>{}; //
    inputHTML.addEventListener("click",()=>{}); // addEventListener 로 이벤트 관리
    ```

---

### 5. 주요 GlobalEventHandlers

### 5-1  **DOM property 관련**

### 5-1-1 `onChange`

- 언제 호출? : `<input> <select> <textarea>` 에서 **value값이 바뀌었을 때**
- 용도

     1. **언제든지 저 태그들의 value 값이 변했을 때** 

- 주의점
    1. `<input>` 에선 **enter 키를 눌러야만** change가 됐는지 안됐는지를 확인한다. 만약 실시간으로 변하는걸 확인하고 싶다면 `onkeydown` 을 이용해야 한다

### 5-2 **키보드 관련**

### 5-2-1 `onkeydown`

- 언제 호출? : 키보드의 **어떤 키**든 눌렸을때
- 용도
    1. 검색창에서 **실시간으로 맞춤 검색어를 업데이트**를 해야 함
- 같이 알면 좋은 method ([https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent))
    - `KeyboardEvent.code` : 어떤 키를 눌렀는지 반환

---

### 5-3 **마우스 관련**

### 5-3-1 `onclick`

- 언제 호출? : **마우스 좌클릭** 했을때 발생
- 용도
    1. **언제든지 좌클릭이란걸 할때**

### 5-3-2 `ondbclick`

- 언제 호출? : **마우스 좌클릭을 두번연속** 했을 때 발생

### 5-3-3 `oncontextmenu`

- 언제 호출? : **마우스 우클릭**을 했을때 발생
- 용도
    1. **언제든지 우클릭이란걸 할때**
- 주의점
    1. 기본적으로 브라우져에선 우클릭을 하면 contexmenu 창이 뜬다. 따라서 원하는 method를 등록시켜주기 위해선 *`e.preventDefault()`* 를 이용하여 기존 리스너를 삭제해야 한다.

---

## 과제 (Assignment)

### 필수 과제

- 주어진 `index02-start.html` , `App.js` , `style.css` 로 부터 Music Kit 을 제작합니다.
- 구현사항
    - 3가지 이상 (드럼, 피아노, 기타 등등등 원하는 것) 악기를 picker-drop을 통해 고름 (필수)
        - 해당 악기에 해당하는 사운드가 출력되야 함 (필수)
        - 악기를 변경 할 경우의 배경화면 변경 에니메이션 (선택)
    - 각 박스를 클릭하면 소리가 남 (필수)
    - 각 박스에 적혀있는 문자를 타이핑 할 경우 소리가 남 (필수)
    - 각 박스를 클릭 or 타이핑 할 경우 애니메이션 효과 추가 (필수)
- 아마도 발생할 가능성이 높은 오류들

### 선택 과제

- `Event.target` vs `Event.currentTarget`  의 차이점
