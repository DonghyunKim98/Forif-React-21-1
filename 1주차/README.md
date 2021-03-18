# 1주차 스터디

## 📣 공지사항

1. JavaScript 의 경우 DOM 관련된 부분만 스터디에서 강의합니다.  문법 같은 경우는 [https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2) 코스를 참고해주시면 되겠습니다.
2. 0주차 과제는 제출하지 않습니다. 이번주 과제부터 제출합니다.
3. 이번 과제에서 다음 스터디에서 배울 내용이 일부분 포함 되어 있습니다. 언급 해드릴테니, 해당 부분은 깊게 이해 하시지 않아도 괜찮습니다.

## HTML - `form`

### `form`

[나의 첫 HTML 폼](https://developer.mozilla.org/ko/docs/Learn/HTML/Forms/Your_first_HTML_form)

[form event(폼 이벤트 타입) & 문서로딩](https://webclub.tistory.com/342)

- **사용자와 웹사이트간에 데이터를 전송**하기 위한 공간을 마련하는 DOM
    - 즉, **폼에 의해 수집된 데이터는 서버로 전송된다** 라는 걸 전제로 깔고 있음
    - 현재 스터디에서는 서버를 이용하고 있지 않으므로, **사용자로부터 입력을 받는 공간** 로 생각
- 주요 *attribute*
    - `action` : 데이터를 보낼 **URL**
    - `method` : 어떤 **HTTP 방식**을 사용할 것인지 ( GET , POST 등의 REST API)
- 주요 *JS method*
    - `**reset()**` : form 에 들어간 모든 사용자 입력을 깨끗이 원래 상태로 되돌림
- form 에 자주 들어가는 HTML DOM
    - `textarea`  `input` `button` `select`
- form 에 적용되는 이벤트
    - `submit` : 서버로 전송하는 명령인 submit에 적용
    - `change` : 컨트롤의 값이 변경되었을때 발생함
                 `input`(text,radio,checkbox)`textarea` `select` 에만 적용

---

### `form` 의 들어갈 수 있는 DOM 1번 : `textarea`

[- HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/textarea)

- 멀티라인 일반 텍스트 편집 컨트롤을 나타냄
- 즉 여러줄의 긴 문장을 입력할 수 있다
- **댓글이나 리뷰**등을 받기 위해서 사용된다.

---

### `form` 의 들어갈 수 있는 DOM 2번 : `input`

[: 입력 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)

- **다양한 방식**으로 사용자로부터 입력을 받아올 수 있음 ⇒ `form` 안에서 자주 사용됨
    - `type` 을 지정함으로써, 동작 방식을 지정가능
    - 대표적인 type
        1. `button` : 버튼
        2. `checkbox` : 체크박스
        3. `text` : 기본적인 text
        4. `submit` : 제출하는 버튼
        5. `select` : 선택지를 주고 그중 1개를 고르는 양식
    - 기존 html DOM 가 아예 겹치는 것도 있음 (`button` `select` 등이 대표적)
    ⇒ 어떤 것을 쓰는게 더 좋은지 확인해보고 사용하길 권장
- input 의 `type` 및 `name` 을 정하는 건 꽤나 중요 → 브라우져가 **자동완성을 추천해줄때 사용되기 때문**
- 주요 *attribute*
    - `placeholder` : 양식이 비어있을때 **미리 나타내주는 내용**
    - `value` : **양식의 현재 값 
                  →** 실시간으로 클라이언트에서 업데이트를 해야할때 자주 사용
                  → 이 경우 `change` 이벤트 리스너와 같이 많이 사용된다. -
- 주요 *JS method* → 어떤 type을 쓰냐에 따라 다름.

---

### `form` 의 들어갈 수 있는 DOM  3번 : `button`

- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/button](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button)
- 클릭 가능한 DOM를 만듦
- 주요 *attribute*
    1. `disabled` : 활성화 여부
    2. `name` : 버튼 안에 들어갈 text
- 주요 *JS method*
    1. `**onClick`** : 버튼을 클릭했을 때 호출

---

### `form` 의 들어갈 수 있는 DOM 4번 : `select`

- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/select](https://developer.mozilla.org/ko/docs/Web/HTML/Element/select)
- 다양한 선택지를 주고 하나를 고르는 DOM
- 하위 DOM 으로 `<option>` 을 가지고 있음
- 주요 JS method
    1. `**onChange**` : select의 요소가 바뀔 때 호출

---

## CSS - `flex`


- 참고 사이트 : [https://studiomeal.com/archives/197](https://studiomeal.com/archives/197)

### 언제 쓰는가?

- **레이아웃 배치 전용 기능**으로 고안 됨
- 기존의 `dispaly : float / inline-block` 보다 편하고 강력
- 단순하게 DOM 들을 쌓는 개념에서 배치한다는 개념 으로 진화
- 최근에는 `display: grid` 가 추가되었지만 [브라우저 호환성](https://webclub.tistory.com/316)때문에 `flex` 가 더 대중적으로 사용됨
    - React-Native의 경우 flex만 지원

### Flex Container에 적용하는 속성

- `display : flex` : 가장 기본적으로 사용하는 속성
- `flex-direction : row / column / row-reverse / column-reverse` : 아이템들이 배치되는 **축의 방향 결정**
- `flex-wrap : nowrap / wrap / wrap-reverse` : 아이템들이 **한 줄에 담을 여유 공간이 없을때** 줄**바꿈을 어떻게 할 것**인지 결정
- `**flex-flow**` : **flex-direction + flex-wrap⇒ 한 번에 지정가능**
- `justify-content` : **메인 축을 바탕**으로 아이템들을 정렬하는 속성 (쌓기 맥락과 동일)
- `align-items` : **메인축과의** **수직 축을 바탕**으로 아이템들을 정렬하는 속성 (쌓기 맥락과 수직)
- `align-content` : 아이템들이 2줄 이상으로 넘칠때 수직축 방향 정렬을 결정하는 속성

> 자세한 사항들은 링크된 사이트를 참고하시면 됩니다.

### Flex Item에 적용하는 속성

- `flex-basis` : **아이템의 기본 크기**를 설정
- `flex-grow` : **아이템이 기본값보다 얼마나 커질 수 있는지** 설정
- `flex-shrink` : **아이템이 기본값보다 얼마나 작아질 수 있는지** 설정
- `**flex**` : **flex-basis + flex-grow + flex-shrink**

> 자세한 사항들은 링크된 사이트를 참고하시면 됩니다.

---

## JavaScript - DOM Traversal

- [https://www.youtube.com/watch?v=v7rSSy8CaYE&t=625s](https://www.youtube.com/watch?v=v7rSSy8CaYE&t=625s)
- JavaScript 에서 HTML DOM요소에 탐색하는 방법을 정리 한 것입니다.
    - DOM에 접근을 해야 JavaScript로 해당 DOM요소를 control 하기 때문입니다.

### 1. `document.getElementbyId(*id*)`

- [https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById](https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById)
- DOM 에 부여한 `id` 요소를 가지고 탐색합니다.
    - `id` 는 필연적으로 해당 Web page 에서 unique하게 DOM에 부여되므로 반환되는 결과값은 **DOM 요소 1개**입니다. (정확히는 `Element` 객체 1개를 반환)
- 가장 많이 사용됐던 Traversal 입니다. (기본적으로 `id` 값은 자바스크립트를 위해 설정한다고 배웠을겁니다.)

### 2. `document.getElementsByClassName(*className*)`

- [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- DOM에 부여한 `class` 요소를 가지고 탐색합니다
    - `class` 는 기본적으로 여러 DOM 에 동일하게 부여할 수 있습니다. 따라서 반환되는 결과값은 **DOM 요소들이 담긴 유사 배열**입니다 (정확히는 `HTMLElementCollection`)
    - 유사 배열을 반환하기 때문에, 배열에서 이용할 수 있는 다양한 JavaScript method를 쓰고 싶다면 아래와 같이 작성해서 새로운 배열을 생성해야 하는 방법이 있습니다.

    ```jsx
    const elements = Array.from(document.getElementByClassName("parent"))
    ```

- 보통 같은 `class`로 묶인 DOM 들은 CSS 를 공유하는 경우가 많습니다. 따라서 이번 Traversal 은 **JavaScript 상에서 DOM 의 style 을 조작**하기 위해 쓰이는 경우가 많습니다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e70bef1-e7f5-4c72-b913-32348c085699/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e70bef1-e7f5-4c72-b913-32348c085699/Untitled.png)

### 3. `Document.querySelector()` , `Document.querySelectorAll()`

- [https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)
- [https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)
- 여러분들이 아마 가장 자주 사용하게 될 traversal 입니다.
- 각각 `document.getElementbyID` 와 `document.getElementsByClassName()` 는 큰 차이가 없습니다.
- 차이점은
    1. 함수의 인자로 넘기는 부분을 **구체화** 시킬 수 있습니다. 

        ex) `#select` 로 넘기면 select라는 id를 가진 DOM을 찾습니다

        ex) `select #juice` 로 넘기면 select라는 `tag`를 가진 DOM 안에서 juice라는 `id`를 가진 DOM을 찾습니다.

        > 단, Document.querySelectorAll() 는 오직 CSS 실렉터(`.className`)만 인자로 받습니다

    2. `Document.querySelectorAll()` 의 경우 **진짜 배열을 반환**합니다.
        - 따라서 굳이 `Array.from()` 를 이용해서 진짜 배열로 변환하는 수고로움을 덜 수 있습니다.

## JavaScript - DOM manipulation


> 다다음주에 본격적으로 다룰 예정입니다. 과제에서 사용할 부분만 간략하게 알려드립니다.

### 1. DOM의 property 가져오기

- 기본적으로 해당 DOM에 할당된 어떤 property든 가져올 수 있습니다

```html
<!--HTML-->
<div id="title"> Hello World!</div>
```

```jsx
const title = document.querySelector("#title");
console.log(title.textContent) // Hello World!
```

- 여기서 사용된 `textContent` 의 경우 DOM에 할당된 텍스트 컨텐츠를 보여줍니다.
- 구글링을 통해 가져오고 싶은 내용이 무엇인지를 검색한다면 (ex : *how to get value of DOM?*) 가져오는 방법을 알 수 있습니다. (워낙 많기에 여기선 일단 생략합니다.)

## JavaScript - EventListener


> 다음주에 본격적으로 다룰 예정입니다. 과제에서 사용할 부분만 간략하게 알려드립니다.

### 1. `EventTarget.addEventListener()`

- [https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
- 해당 DOM에 Event를 할당합니다. Event란 클릭, 키보드 입력등의 사용자에 의해 발생하는 일련의 행위일 수도 있고 비동기적 과정에서 발생하는 일련의 과정일 수도 있습니다.
- 이때 Listener를 등록하고 가장 대중적인 방법이 `addEventListener()` 입니다. 아래와 같이 사용됩니다.

```html
<!--HTML-->
<div id="click">클릭해주세요!</div>
```

```jsx
// 먼저 DOM traversal로 DOM을 가져옵니다
const button = document.getElementByID("click");

// 해당 DOM에 event를 붙여줍니다.
// 첫번째 인자 -> 어떤 event type인지?
// 두번째 인자 -> 해당 event가 발생하면 어떤 함수를 발생시킬 것인지? (콜백함수)
button.getElementbyID("click",()=>{
	console.log("눌려졌다!!);
});
```

## 과제 (Assignment)

### 필수 과제

- 주어진 `index01-start.html` , `App.js` , `style.css` 로 부터 [구글 폰트 사이트](https://fonts.google.com/) 를 클론 코딩합니다.
- 구현 사항
    1. HTML `form` 을 이용하여 `text` 를 입력하는 창과 클릭할 수 있는 `button` 생성 (필수)
    2. CSS `flex` 를 이용하여 8개 이상의 폰트를 가진 각각 다른 박스 배치 (필수)
    3. JavaScript DOM manipulation 과 EventListener를 사용하여 button이 클릭되었을때, text안에 있는 내용이 본문 박스안에서 폰트 적용되어 보여지게 함 (필수)
    4. `button` 클릭시 `text`를 입력하는 창이 자동적으로 비어짐 (선택)
    5. text에 입력된 사항을 실시간으로 반영 (선택 → hint  Keyword : `onChange` )
- 아마도 발생할 가능성이 높은 오류들 -> 구글링을 해봐서 알아보세요! 키워드들을 제공해드립니다.
    1. button이 눌렀을때 웹페이지가 **새로고침 (refresh)** 되는 현상
-----

### 선택 과제

- JavaScript 배열의 method (모든 걸 다 알 필요는 없지만, 자주 사용되는 것들은 알아두면 좋습니다.)
- CSS `grid`
- `EventListener` 를 설명하는 과정에서 **비동기적 (*asynchronous*)** 이라는 표현과 콜백함수(**callback function**)을 사용했습니다. JavaScript는 비동기적 처리를 지원하는 언어입니다. 이것이 무엇인지를 찾아보는 것은 자바스크립트를 이해하는데 굉장한 도움이 됩니다. 또한 콜백함수는 자바스크립트의 핵심중 하나입니다.
----
### 과제 제출 방식
- 먼저 첫주차라서 해야할 것이 있습니다. vscode로 들어가 적당한 폴더를 잡고 해당 폴더가 잡혀있는 터미널을 엽니다 (윈도우 기준 ctrl + `)
```
git clone https://github.com/DonghyunKim98/Forif-React-21-1.git
```
- 위 명령어를 치면 현재 이 repository가 자동으로 복사됩니다.
- 해당 주차에 과제 폴더에 들어가면 본인의 이름으로 된 폴더가 있습니다. (깃헙에 업로드하기 위해 더미 텍스트 파일을 하나 넣어놨습니다.) 그 폴더에서 작업해주시면 됩니다.
- 작업을 하실땐 **반드시 새로운 branch를 파서 작업해주시기 바랍니다.** (main 브랜치에 작업하고 올릴려고 해도 제가 막아두어서 안됩니다) 새로운 branch를 생성하고, 해당 branch로 이동하는 방법은 다음과 같습니다.

    ```
    git branch "newBranchName" // 브랜치 생성
    git checkout "newBranchName" // 해당 브랜치로 이동
    ```

- 작업이 다 끝나셨으면 commit을 하시고 원격 브랜치로 push 합니다.
![image](https://user-images.githubusercontent.com/60422588/111596209-409fc980-8810-11eb-9360-fec13245a11a.png)
- vscode 상에서 1번을 누르면 다음과 같이 coomit message를 작성하는 칸이 나옵니다.
- 메세지 작성이후 3번을 누르면 coomit이 완료됩니다.
![image](https://user-images.githubusercontent.com/60422588/111596378-72189500-8810-11eb-9d4d-6803fa881e3a.png)
- 이후 좌하단에 있는 버튼을 이용하여 push 합니다

- 이후 깃헙에 접속하셔서
![image](https://user-images.githubusercontent.com/60422588/111597037-261a2000-8811-11eb-83ca-1e02b4f9be55.png)
- 1번을 눌러 Pull Request 탭에 들어오셔서 새로운 Pull Request를 날려주시면 됩니다! 코드리뷰가 제공됩니다.
