# 4주차 스터디

## 3주차 과제 실습

- 3주차 start 파일에서 최종 파일까지 가는 방법 실습
- 정답 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./ClockTimer.CSS">
    <script defer src="./App.js"></script>
    <title>Clock and Timer</title>
</head>
<body>
    <div class="content">
        <!--Clock HTML-->
        <div class="clockContent">
            <div class="clock">
                <div class="clock-face">
                  <div class="hour-hand hand "></div>
                  <div class="min-hand hand "></div>
                  <div class="second-hand hand "></div>
                </div>
              </div>
        </div>
        <!--Time HTML-->
        <div class="timerContent">
            <div class="timer">
                <div class="timerControls">
                  <button data-time="20" class="timerButton">20 Secs</button>
                  <button data-time="300" class="timerButton">Work 5</button>
                  <button data-time="900" class="timerButton">Quick 15</button>
                  <button data-time="1200" class="timerButton">Snack 20</button>
                  <button data-time="3600" class="timerButton">Lunch Break</button>
                  <form id="customForm">
                    <input type="text" name="minutes" placeholder="Enter Minutes">
                  </form>
                </div>
                <div class="display">
                  <h1 class="timeLeft"></h1>
                  <p class="endTime"></p>
                </div>
              </div>
        </div>
    </div>
</body>
</html>
```

```css
html {
    font-family: 'helvetica neue';
    text-align: center;
}

.content {
    display: flex;
}
/* Clock related CSS */
.clockContent{
    background: #018DED url(https://unsplash.it/1500/1000?image=881&blur=5);
    background-size: cover;
    flex: 1;
    min-height: 100vh;
}
.clock {
    width: 30rem;
    height: 30rem;
    border: 20px solid white;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
    padding: 2rem;
    box-shadow:
        0 0 0 4px rgba(0,0,0,0.1),
        inset 0 0 0 3px #EFEFEF,
        inset 0 0 10px black,
        0 0 10px rgba(0,0,0,0.2);
}
.clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px); /* account for the height of the clock hands */
}
.hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left;
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.hour-hand{
    height: 6px;
    width: 30%;
}
.min-hand{
    height: 4px;
    width : 40%;
}
.second-hand{
    height : 2px;
    width : 50%;
}
/* Timer related CSS*/
.timerContent{
    flex: 1;
    min-height: 100vh;
    box-sizing: border-box;
    background: #8E24AA;
    background: linear-gradient(45deg,  #42a5f5 0%,#478ed1 50%,#0d47a1 100%);
}
*, *:before, *:after {
        box-sizing: inherit;
}
body {
    margin: 0;
}
.timeLeft {
    font-weight: 100;
    font-size: 20rem;
    margin: 0;
    color: white;
    text-shadow: 4px 4px 0 rgba(0,0,0,0.05);
}
.timer {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
}
.timerControls {
      display: flex;
}
.timerControls > * {
      flex: 1;
}
.timerControls form {
      flex: 1;
      display: flex;
}
.timerControls input {
      flex: 1;
      border: 0;
      padding: 2rem;
}
.timerButton {
        background: none;
        border: 0;
        cursor: pointer;
        color: white;
        font-size: 2rem;
        text-transform: uppercase;
        background: rgba(0,0,0,0.1);
        border-bottom: 3px solid rgba(0,0,0,0.2);
        border-right: 1px solid rgba(0,0,0,0.2);
        padding: 1rem;
        font-family: 'Inconsolata', monospace;
  }
.timerButton:hover,
.timerButton:focus {
    background: rgba(0,0,0,0.2);
    outline: 0;
}
.display {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.endTime {
    font-size: 4rem;
    color: white;
}
```

```jsx
// Clock
class Clock {
  constructor(classNames) {
    this.clockHands = classNames.map((className) => document.querySelector(`${className}`));
  }
  updateClockHand() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();
    this.clockHands.forEach((clockHand) => {
      if (clockHand.classList[0] === "second-hand") {
        const secondsDegrees = ((seconds / 60) * 360) - 90; // 15초일때 수평
        clockHand.style.transform = `rotate(${secondsDegrees}deg)`;
        return;
      }
      if (clockHand.classList[1] === "min-hand") {
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) - 90;
        clockHand.style.transform = `rotate(${minsDegrees}deg)`;
        return;
      }
      // 시침
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) - 90;
      clockHand.style.transform = `rotate(${hourDegrees}deg)`;
    })
  }
  updateHandInterval() {
    setInterval(this.updateClockHand(), 1000)
  }
};

// Timer
class TimerDOM {
  constructor() {
    this.timerDisplay = document.querySelector('.timeLeft');
    this.endTimeDisplay = document.querySelector('.endTime');
    this.btns = document.querySelectorAll('.timerButton');
    this.customForm = document.querySelector('#customForm');
  }
  addEventListener(startTimer) {
    const btnClickListener=(event)=>{
      const seconds=parseInt(event.currentTarget.dataset.time);
      startTimer(seconds);
    }
    this.btns.forEach(button => button.addEventListener('click',(event)=>btnClickListener(event)));
    const formSubmitListener=(event)=>{
      event.preventDefault();
      const mins = this.customForm.minutes.value;
      startTimer(mins * 60);
      this.customForm.reset();
    };
    this.customForm.addEventListener('submit',(event)=>formSubmitListener(event));
  }
  displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    this.timerDisplay.textContent = display;
  }
  displayEndTime(endTime){
    const end = new Date(endTime);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    this.endTimeDisplay.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
}

class Timer {
  constructor() {
    this.countdown = null;
    this.timerDOM = new TimerDOM();
  }
  initTimerSetting(){
    this.timerDOM.addEventListener((seconds)=>this.startTimer(seconds));
  }
  startTimer(seconds) {
    clearInterval(this.countdown);
    const now = Date.now(); // 밀리초를 반환
    const endTime = now + seconds * 1000;
    this.timerDOM.displayTimeLeft(seconds);
    this.timerDOM.displayEndTime(endTime);
    this.countdown = setInterval(() => {
      const secondsLeft = Math.round((endTime - Date.now()) / 1000);
      // check if we should stop it!
      if (secondsLeft < 0) {
        clearInterval(this.countdown);
        return;
      }
      // display it
      this.timerDOM.displayTimeLeft(secondsLeft);
    }, 1000);
  }
};
// Initialization
function init() {
  // clock initialization
  const handsName = [".second-hand", ".min-hand", ".hour-hand"];
  const hands = new Clock(handsName);
  hands.updateClockHand();
  hands.updateHandInterval();

  // timer initialization
  const timer = new Timer();
  timer.initTimerSetting();
}
init();
```

## 좋은 코드를 작성하는 방법론

### 1. KISS (Keep It Short and Simple , Stupid and Simple, Keep it Small and Simple)

- **최대한 간단하게 코드를 작성**하라는 것
    - 복잡하게 구현할 경우, **코드의 가독성과 유지보수성이 매우 떨어지기 때문**
- 굳이 화려하게 테크닉을 이용해서, 코드 줄을 줄이지 않는 것
- 함수에 주석을 달지 않아도 어떤 함수인지를 알도록 심플한 함수를 구현하는 것
- View 를 담당하고 있다면, View 와 관련된 것들만 존재하도록 그햔
- Bad Code

    ```jsx
    // 1번째
    function getFirst(array, isEven){
    	return array.find(x=> (isEven ? x%2 ===0 : x%2 !==0));
    }

    // 2번째
    function getFirst(array, isEven){
    	if(isEven){
    		return array.find(x=>x%2===0);
    	} else{
    		return array.find(x=>x%2!==0);
    	}
    }
    ```

    - 1번째 → 한 줄안에 다 담겨져 있지만, 로직을 바로 알아보기에는 어려움
    - 2번째 → paramter 로 주어지는 `isEven` 이 무엇이냐에 따라서 다른 로직이 적용되는 것은 simple 하지 않음
- Good Code

    ```jsx
    function getFirstOdd(array) {
    	return array.find(x=>x%2!==0);
    }

    function getFirstEven(array){
    	return array.find(x=>x%2===0);
    }
    ```

    - 함수명만 보고 바로 어떤 로직인지 알 수 있음.

### 2. DRY (Don't Repeat Yourself)

- WET (Write Every Time,  Write Everything twice, Waste Everyone's time) 와 상반되는 개념
    - 쉽게 말해서 *복붙하는 로직 작성하지 말자*
- Dry is about **the duplication of knowledge of intent**. It's about expressing the same thing in two different places, possibly in two totally different ways.
- 로직을 반복해서 사용하지말고, **한 곳에서만 작성하고 함수나 import 등으로 가져올 것**!
- 너무 많거나 상세한 주석은 DRY 원칙에 위배된다고 볼 수 있음 (그만큼 코드가 반복되고, 이해할 수 없다는 뜻)
- **유지보수성**과 관련이 깊음
    - 1억개의 같은 로직이 사용되면, 작은 1개라도 바꿀경우 1억개의 페이지를 바꿀 순 없기 때문
- 단순히 코드의 반복을 의미하는 좁은 개념이 아님. 로직, 지식, 의도, 비즈니스로직이 **중복되지 않도록 하는 넓은 개념**
- Bad Code

    ```jsx
    function greetings(user){
    	return `Hi ${user.firstName} ${user.lastName}`;
    }

    function goodbye(user){
    	return `See you next time ${user.firstName} ${user.lastName}`
    }
    ```

    - user의 middleName 을 출력하라고 한다면?? ⇒ 다 고쳐야함!! (💩)
- Good Code

    ```jsx
    function greetings(user){
    	return `Hi ${user.fullName()}`
    }

    function goodbye(user){
    	return `See you next time ${user.fullName()}`;
    }

    class User {
    	fullName(){
    		return `${this.firstName} ${this.lastName}
    	}
    }
    ```

    - OOP 를 이용하여, Class 의 method 로 로직을 통합시킴 ⇒ 🌟

### 3. YAGNI (You Ain't Gonna Need It)

- 필요 없는 기능을 작성하지 말아라!
- 필요하지 않는 기능 X, 사용하지 않는 기능 X , 지나치게 미래지향적 X
- 깨긋하게 O , 변경이  쉽게 O, 유지보수 용이 O

---

### 참고 사이트

- [https://johngrib.github.io/wiki/dry-principle/#fnref:andy-66](https://johngrib.github.io/wiki/dry-principle/#fnref:andy-66)
- [https://www.youtube.com/watch?v=jafa3cqoAVM&t=340s](https://www.youtube.com/watch?v=jafa3cqoAVM&t=340s)
- [https://blog.naver.com/PostView.nhn?blogId=complusblog&logNo=221163007357&proxyReferer=https:%2F%2Fwww.google.com%2F](https://blog.naver.com/PostView.nhn?blogId=complusblog&logNo=221163007357&proxyReferer=https:%2F%2Fwww.google.com%2F)
