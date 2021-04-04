# 3주차 스터디

---

## 📣  공지사항

1. 오늘 스터디에서 중간고사 일정 확인 이후, 다음주에 한번 더 스터디를 진행 여부 결정합니다. 
  - 다음주 스터디 진행하지 않습니다.
2. 스터디 재개 날짜는 5.8입니다.
3. 오늘이 마지막 JS 스터디입니다. 다음 스터디 부터는 React 스터디 진행합니다.

---

## 2주차 스터디 설명

### HTML Code

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>JS Drum Kit</title>
  <link rel="stylesheet" href="style.css">
  <script src="App.js" defer></script>
</head>
<body>
  <div class="box">
    <select id="instSelector" class="instSelector">
      <option value="drum">드럼</option>
      <option value="guitar">기타</option>
    </select>
  </div>

  <div class="keys">
    <div value="a" class="key">
      <div>A</div>
      <span class="sound"></span>
    </div>
    <div value="s" class="key">
      <div class="keyType">S</div>
      <span class="sound"></span>
    </div>
    <div value="d" class="key">
      <div class="keyType">D</div>
      <span class="sound"></span>
    </div>
    <div value="f" class="key">
      <div class="keyType">F</div>
      <span class="sound"></span>
    </div>
    <div value="g" class="key">
      <div class="keyType">G</div>
      <span class="sound"></span>
    </div>
    <div value="h" class="key">
      <div class="keyType">H</div>
      <span class="sound"></span>
    </div>
    <div value="j" class="key">
      <div class="keyType">J</div>
      <span class="sound"></span>
    </div>
    <div value="k" class="key">
      <div class="keyType">K</div>
      <span class="sound"></span>
    </div>
    <div value="l" class="key">
      <div class="keyType">L</div>
      <span class="sound"></span>
    </div>
  </div>
  <!-- drum Audio-->
  <audio inst="drum" value="a" src="sounds/drum/clap.wav"></audio>
  <audio inst="drum" value="s" src="sounds/drum/hihat.wav"></audio>
  <audio inst="drum" value="d" src="sounds/drum/kick.wav"></audio>
  <audio inst="drum" value="f" src="sounds/drum/openhat.wav"></audio>
  <audio inst="drum" value="g" src="sounds/drum/boom.wav"></audio>
  <audio inst="drum" value="h" src="sounds/drum/ride.wav"></audio>
  <audio inst="drum" value="j" src="sounds/drum/snare.wav"></audio>
  <audio inst="drum" value="k" src="sounds/drum/tom.wav"></audio>
  <audio inst="drum" value="l" src="sounds/drum/tink.wav"></audio>
  <!-- Guitar Aduio-->
  <audio inst="guitar" value="a" src="sounds/guitar/A.wav"></audio>
  <audio inst="guitar" value="s" src="sounds/guitar/Amaj.wav"></audio>
  <audio inst="guitar" value="d" src="sounds/guitar/Amin.wav"></audio>
  <audio inst="guitar" value="f" src="sounds/guitar/Cmaj.wav"></audio>
  <audio inst="guitar" value="g" src="sounds/guitar/Dmaj.wav"></audio>
  <audio inst="guitar" value="h" src="sounds/guitar/Dmin.wav"></audio>
  <audio inst="guitar" value="j" src="sounds/guitar/Emaj.wav"></audio>
  <audio inst="guitar" value="k" src="sounds/guitar/Emin.wav"></audio>
  <audio inst="guitar" value="l" src="sounds/guitar/Gmaj.wav"></audio>
</body>
</html>
```

- 중요하게 봐야 할 부분은 `audio` 에서 `inst` 라는 새로운 **custom property** 를 제가 부여했다는 것입니다.
- 이 부분을 이용하여 JS코드를 더 깔끔하게 작성할 수 있습니다.

---

### JS Code

```jsx
// function declaration
function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.currentTarget.classList.remove('playing');
}
function playSound(value){
    const audio = document.querySelector(`audio[value="${value}"][inst="${currentInst}"]`);
    const key = document.querySelector(`div[value="${value}"]`);
    if (!audio) {
        alert("그런 소리 없다!") ;
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function playSoundKeyDown(event) {
    playSound(event.key);
}
function playSoundClick(event){
    const currentDOM = event.currentTarget;
    playSound(currentDOM.getAttribute("value"));
}
function instChangeListener(){
    currentInst=instSelector.value;
    if(currentInst==="drum"){
        keys.forEach((key,index)=>key.childNodes[3].textContent=drumSoundName[index]);
        return;
    }
    keys.forEach((key,index)=>key.childNodes[3].textContent=guitarSoundName[index]);
}

// constant value
const instSelector = document.querySelector('.instSelector');
const keys = document.querySelectorAll('.key');
const drumSoundName = ["clap","hihat","kick","openhat","boom","ride","snare","tom","tink"];
const guitarSoundName = ["A7","Amaj","Amin","Cmaj","Dmaj","Dmin","Emaj","Emin","Gmaj"];

// init code
let currentInst = "drum";
instSelector.addEventListener("change",instChangeListener);
keys.forEach((key,index) => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click',playSoundClick);
    key.childNodes[3].textContent=drumSoundName[index];
});
window.addEventListener('keydown', playSoundKeyDown);
```

1. **`window` 객체에 리스너 등록** → 어디서든 키를 눌렀을때 반응 가능
2. **transition Event** →  CSS 가 변경될 경우 발동
    - 이 Event 중 `transtionend` 를 이용하여 아래와 같은 로직 작성
        1. `keydown`  Event → `.playing` 이라는 Class를 추가 (`classList.add` 이용)
        2. Class 가 추가되어 CSS 가 추가됨
        3. CSS에 적어 놓은 `transition` 프로퍼티로 인해 애니메이션 효과 발동
        4. 에니메이션이 다 끝난 후 (CSS가 변경이 끝난 경우→ `transitionend` 의 propertyName으로 `transform` 이 들어옵니다) `.playing` 이라는 Class를 삭제(`classList.remove` 이용)
        5. 2~3번 역으로 발동

        ⇒ 결과적으로 눌렀을때 디자인이 변경됐다가 돌아오게 할 수 있음

3. `keys`에 이벤트 등록 → `Array.forEach()` 이용
4. 미리 상수로  `soundName` 선언 → `Array.forEach()` 중 `index` 를 이용 
    - **이름이 들어간 배열과 keys의 index는 같음이 보장됨**
5. `querySelctor` 의 활용 →`audio[value="${value}"][inst="${currentInst}"]` 
    - 조건을 다각화할 수 있음
    - 이를 이용하여 `audio` 값이 `null` 인 경우, 즉 비어있는 사운드를 바로 알수 있음
        - early return 사용 (`else` 문 사용 자제)
6. 연타 했을 때 소리가 다시 나게하는 부분 → `audio.currentTime` 을 0으로 설정
7. 클릭 했을 때와 키보드를 눌렀을때 동일한 로직 → 따로 함수로 분리, 코드 재사용성을 높임

- 1번, 2번, 6번 항목의 경우에는 알고 쓴게 아닙니다. (익숙해져서 외운건 어느정도 있지만)
- 이 3가지 항목은 "구글링"을 통해 사용설명서를 찾아서, 내가 구현하고자 하는 바에 맞추는 과정입니다.
- 이해가 좀 되시나요? 이 3가지 항목같은 부분을 "잘 알고있는" 사람이 웹개발을 잘하는게 아닌, **"잘 찾아내고, 잘 사용하는" 사람이 웹개발을 잘하는 사람** 입니다. (특히 프론트앤드!)

## JavaScript

### 1. Object Oriented Programming (OOP) 개요

- [https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS) (MDN 공식문서)
- [https://velog.io/@yejinh/객체-지향-프로그래밍](https://velog.io/@yejinh/%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)
- 객체지향 프로그래밍이란?
    - 프로그래밍에서 필요한 데이터를 추상화시켜 **상태와 행위를 가진 객체**를 만들고 **그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법**

    ex) 마우스 포인터

    - 마우스 포인터를 화면에 구성할려면 어떤 것들이  필요할 까요?
        - 화면내의 x 좌표, 화면내의 y 좌표, 마우스 포인터의 이미지 등등이 필요합니다.
        - 이러한 **구성 요소**를 객체내에서 보통은 **`property`** 라고 합니다. (언어마다 명칭은 조금씩 다를 순 있습니다.
    - 마우스 포인터는 그럼 어떤 동작들을 수행할까요?
        - 좌클릭, 우클릭, 이동, 드래그 등등
        - 이러한 **동작** 내지는 **함수** 들을 객채 내에서 보통은 **`method`** 라고 합니다. (언어마다 명칭은 조금씩 다를 순 있습니다.)
        - JS에서는 이런 method 들도 프로퍼티로 취급합니다.
    - 이런 **`property`** 들과 **`method`** 들은 한 곳에 묶어서 관리하자! 이것이 바로 객체 지향의 첫 걸음입니다.
- 객체지향의 장점
    1. 코드 재사용이 용이  
        - 남이 만든 클래스를 가져와서 이용할 수 있고 **상속**을 통해 확장해서 사용할 수 있음.
    2. 유지보수가 쉬움
        - 절차 지향 프로그래밍에서는 코드를 수정해야할 때 일일이 찾아 수정해야하는 반면 객체 지향 프로그래밍에서는 수정해야 할 부분이 클래스 내부에 멤버 변수혹은 메서드로 있기 때문에 해당 부분만 수정하면 됨.

    3. 대형 프로젝트에 적합

    클래스단위로 모듈화시켜서 개발할 수 있으므로 대형 프로젝트처럼 여러명, 여러회사에서 개발이 필요할 시 업무 분담하기 쉽다.

- 객체지향에서 용어
    1. 클래스와 인스턴스
        - **클래스** : 어떤 문제를 해결하기 위한 데이터를 만들기기 위해 추상화를 거쳐 집단에 속하는 **속성**(attribute)과 **행위**(behavior)를 **변수**와 **메서드**로 정의한 것
        - **인스턴스(객체)** : 클래스에서 정의한 것을 토대로 실제 메모리상에 할당된 것으로 실제 프로그램에서 사용되는 데이터
        - 즉 클래스는 붕어빵 틀 이고 인스턴스는 실제로 만들어진 붕어빵 하나하나 들이다.

### 2. JS 에서 객체지향프로그래밍

- [https://poiemaweb.com/js-object](https://poiemaweb.com/js-object)

> 일단 JS는 엄밀히 말하면 클래스 기반 객체 지향을 지원하지 않는다.    
> prototype이라는 JS만의 객체 지향을 지원한다.    
> 하지만 ES6 에서 class가 추가되었고, 다른 프로그래밍에서 하는 대부분의 객체지향 프로그래밍을 할 수 있게 됐다.

### 객체 생성 방법

1. 객체 리터럴 : `{}` 를 이용해서 생성 

    ```jsx
    // 1. Literals
    const obj1 = {}; // 'objcet literal' syntax
    console.log(obj1);

    function print(person){
        console.log(person.name);
        console.log(person.age);
    }
    // 처음부터 property들을 채워넣을 수도 있음
    // property 는 {key : value} 로 이루어짐
    const donghyun = {name: 'donghyun', age :4}; 
    print(ellie);
    ```

    - 타 언어에 비해 매우 간단한 객체 생성
    - 동적으로 프로퍼티들을 추가하거나 삭제할 수도 있음
        - 이는 곧 **단점이 되기도  함 → 속성들이 멋대로 추가되면, 코드의 무결성이 깨질 수 있기 때문**
2. Object 생성자 함수 : `new Object()` 를 이용해서 생성

    ```jsx
    let person = new Object();
    // 프로퍼티 추가
    person.name = 'Kim';
    person.gender = 'male';
    // 자바스크립트에선 메소드들도 프로퍼티 취급
    person.sayHello = function () {
    	// this : 여기서는 호출한 인스턴스를 가리킴 
      console.log('Hi! My name is ' + this.name);
    };

    console.log(typeof person); // object
    console.log(person); // {name: "Kim", gender: "male", sayHello: ƒ}

    person.sayHello(); // Hi! My name is Kim
    ```

    - 1번과 비교해서 그다지 유용하지는 않음
        - 실상은 1번이 2번의 **축약형(short-hand)** 이기 때문
3. 생성자 함수 

    ```jsx
    // 생성자 함수
    function Person(name, gender) {
    	// this-> 인스턴스를 가리킴
      this.name = name;
      this.gender = gender;
      this.sayHello = function(){
        console.log('Hi! My name is ' + this.name);
      };
    }

    // 인스턴스의 생성
    let person1 = new Person('Kim', 'male');
    let person2 = new Person('Lee', 'female');

    console.log('person1: ', typeof person1);
    console.log('person2: ', typeof person2);
    console.log('person1: ', person1);
    console.log('person2: ', person2);

    person1.sayHello();
    person2.sayHello();
    ```

    - 만약 똑같은 동작을 하는 인스턴스들을 생성하고 싶은데, 1번,2번 방식으로 작성하면 코드가 중복이 계속 이루어짐
    - 따라서 생성자 함수를 이용하여 중복되는 부분들을 최소한으로 줄여주는 것이 좋음
    - 다양한 내장 객체 ( `Date` , `Audio` ) 들은 이 방식으로 인스턴스들을 생성하는 것.

### 객체 복사

- 그냥 할당하여 초기화하면 call-by-reference 로 초기화된다.
    - 즉, 원본 객체를 포인터 개념을 이용하여 가리키기만 하므로, **독립적인 2개의 객체가 생성되지 않는다.**

    ```jsx
    const user = {name: 'Donghyun', age: '24'};
    const user2 =user; // point same reference
    user2.name ='coder'; // 원본 객체인 user 도 변함
    console.log(user);
    ```

- 만약 정말로 값들을 복사하고 싶다면 `Object.assign()` 메서드를 사용해야한다.

    ```jsx
    const user = {name: 'Donghyun', age: '24'};
    const user4 = Object.assign({},user); // 새로운 객체 생성
    user4.name="Jisoo";
    console.log(user);
    console.log(user4);
    ```

### 객체 순환

- `for .. in` → key 값들을 순환
- `for .. of` → value 값들을 순환

### `Class`

- ES6 에서 추가됨 → 객체지향의 핵심 요소 (클래스+인스턴스 / 추상화 / 캡슐화 / 상속 / 다형성) 을 완벽히는 아니지만 어느정도 지원하게 됨
- 커스텀 객체들은 클래스로 작성하기를 권장
- Class Declaration

    ```jsx
    // 1. Class declarations
    class Person{
        // constructor
        constructor(name,age){
            //fields
            this.name = name;
            this.age = age;
        }

        //methods
        speak() {
            console.log(`${this.name}: hello!`);
        }
    }
    ```

- 접근자 프로퍼티 → Getter and Setter

    ```jsx
    // 2. Getter and Setter
    // After declare getter and setter, when we call this.value
    // the class call setter
    // so the value name in the setter and getter must be another name to avoid recurrsion
    class User{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    		// User.age 를 호출하면 발생함
        get age(){
            // under score는 아무런 역할을 하지 않는다고 지금은 간주해도 좋습니다.
            // 따라서 아래의 코드는 return this.age; 와 동일합니다
            return this._age;
        }
    		// User.age= 24 등 필드에 어떤 값을 할당할려면 발생함
        set age(value){
            this._age = value < 0 ? 0 : value;
        }
    }
    const user1 = new User('Steve', 'Jo
    ```

    - 웬만하면 데이터  프로퍼티로 직접 접근해서 수정하거나 값을 읽지 말고 **getter 와 setter를 사용하기를 권장**
        - 그래야 **코드의 유지보수성, 객체의 무결성(캡슐화)**등이 보장됨.
    - getter 만 선언되어 있을 경우 필드에 접근하지 못함
> 왜 갑자기 스크립트로 작성해도 큰 상관이 없는 JS에서 OOP를 설명하는지 이해하지 못하실 수도 있습니다.
> 하지만, React로 본격적인 학습을 하기 앞서서, 객체에 대한 이해가 없다면, 매우 난잡한 코드가 될 확률이 높습니다.
> 그래서 이렇게 객체지향에 대한 이해를 먼저 하는 것입니다!

### 3. 실전 - 2주차 과제 수정

---

## 과제 (Assignment)

### 필수 과제

- 주어진 `index03.html` , `App.js` , `ClockTimer.css` 로 부터 Clock & Timer 을 제작합니다.
- 구현 사항
    1. 좌측에는 대한민국 표준시에 맞게 원형 시계가 돌아갑니다 (필수)
    2. 좌상단에 다양한 도시를 선택할 수 있는 selector 창을 만들고, 해당 도시를 선택하면 시계가 변경됩니다. (에니메이션을 넣으면 더더욱 좋습니다) (선택)
    3. 우측에는 아날로그 타이머를 만듭니다.
        1. 분과 초를 입력하고 시작을 누르면 타이머가 시작됩니다. (필수)
        2. 우측상단에 임의적으로 미리 세팅한 (5분, 10분, 30분 등등) 버튼을 누르면 자동 세팅 (선택)
        3. 타이머가 돌아가는 동안에는 시작 버튼 비활성화 (필수)
    4. 원형 시계 → 아날로그 시계 // 아날로그 타이머 → 원형 타이머 로 변경하는 selector 를 만들어도 좋습니다. (선택, 진짜 시간이 남으면 하세요!)
    5. 전체적으로 **객체지향을 사용** 하여 작성합니다. (필수)

### 선택 과제

- `childNodes` vs `children`
- 객체에서 이용할 수 있는 다양한 메서드
- class 에서 다음과 같은 부분들을 더 살펴봐요!
    1. Inheritance
    2. static property
    3. Fields(public, private)
