// 엄격 모드 - https://ithub.tistory.com/162 참고
// Vanila JS로 웹페이지를 만들 경우 작성하시는 편이 권장됩니다.
"use strict"; 
// 변수 선언의 3가지 방식 -> https://medium.com/@wainy254/%EB%B3%80%EC%88%98-%EC%84%A0%EC%96%B8-c696c3b9e787 참고
// 기본적으로 자바스크립트는 dynamically typed language 입니다. 파이썬처럼 변수의 type이 자동적으로 런타임때 결정됩니다.
// var -> 사용하지 말 것. var 은 굉장히 문제가 많은 키워드입니다.
var a =3;
// let -> 통용되는 변수 선언입니다.
let b = 4; 
// const -> 상수 선언입니다. 값을 다시는 바꾸지 못합니다. 정확히는 해당 변수의 "주소값"을 바꾸지 못합니다.
const c= 5;

// Dom Traversal
// 먼저 어떤 방식으로든 DOM을 가져와 변수에 할당할 경우 const로 선언하여 상수로 만들어주세요.
// 절대로 가져온 DOM자체의 주소값을 바꾸는 일은 없기 때문입니다.
// 아래의 방식으로 가져온 DOM은 모두 실시간으로 반영이 이루어집니다.

// 1. document.getElementById();
// 인자로 들어오는 id 값과 동일한 DOM을 탐색합니다.
// 반드시 유일한 1개의 Element 객체를 반환합니다.
const container = document.getElementById("JScontainer");

// 2. document.getElementsByClassName
// 인자로 들어오는 class 값과 동일한 DOM들을 탐색합니다.
// HTMLElement라는 유사배열을 반환 합니다.
// 유사배열이기 때문에 배열의 다양한 메서드들을 사용할 수 없으며, 사용하고 싶다면  Array.from()을 아래와 같이 이용하시면 됩니다.
const items =Array.from(document.getElementsByClassName("item"));

// 배열의 메서드 (앞으로 꾸준히 주석으로 설명을 남겨드립니다.)
// forEach : 각 원소를 전부 순환하면서 원본 배열을 "수정"합니다
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// forEach 자체의 첫번째 인자로는 callback 이 들어옵니다.
// 콜백 함수의 첫번째 인자로는 값이, 두번째 인자는 index가 들어옵니다.
items.forEach((value, index)=>{
    // DOM manipulation 1번 : DOM의 CSS를 바꾸기
    // 해당 DOM의 .style을 호출하고, 원하는 CSS property를 그 다음에 호출하면 됩니다. 
    value.style.borderColor="red";
    // JS에서는 == 은 타 프로그래밍과 동일한 논리 연산값을 배출하지 않습니다. 타입까지 고려하지 않기 때문입니다.
    // 가령 "3"==3 을 하게 되면 JS에서는 true값을 반환하게 됩니다.
    // 타입까지 검사하기 위해서는 === 이나 !== 으로 검사하시기 바랍니다. (매우 강력히 권장)
    if(index===3) value.style.borderColor="gray";
});

// 3. document.qureySelctor() , document.qureySelctorAll()
// 좀 더 DOM Travelsal을 세부적이게 할 수 있습니다.
const items2=document.querySelectorAll(".item");
items2.forEach((value, index)=>{
    value.style.borderColor="red";
    if(index===3) value.style.borderColor="brown";
});

// EventListener
// 가장 보편적으로 이용되는 이벤트를 붙이는 방법은 addEventListener를 JS로 가져온 DOM요소에서 호출하는 방법입니다.
// https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
// addEventListener 자체의 첫번째 인자로는 이벤트의 유형이 들어옵니다. (이벤트의 유형은 정말 많습니다. 자주 사용되는 것 외에는 저도 못 외우고, 차이점도 정확히 인지하고 있지않습니다. 반드시 공식 사이트(MDN)를 통해서 확인하면서 사용하시길 바랍니다.)
// addEventListener 자체의 두번째 인자로는 해당 이벤트가 발생했을 때 처리할 콜백함수가 들어옵니다.
// 콜백함수의 첫번째 인자는 (생략할 수도 있지만) 발생한 이벤트 객체가 들어오게 됩니다.
const btn = document.querySelector("#btn");
btn.addEventListener("click",(event)=>{
    // 이벤트 객체에는 정말 많은 property와 method들이 들어있습니다.
    // 그중에서 currentTarget은 해당 이벤트가 발생한 DOM요소를 반환하게 됩니다.
    // DOM manipulation 2번 : DOM의 text를 가져오기
    // textContent를 호출하시면 됩니다.
    // 가끔 how to get DOM's text? 라고 검색했을 때 innerText를 사용하라는 검색 결과를 얻을 수도 있는데 textContent가 더 권장됩니다. (이유는 궁금하시면 찾아보시면 됩니다!)
    if(event.currentTarget.textContent==="버튼") 
    event.currentTarget.textContent="버튼입니다";
    else{
        event.currentTarget.textContent="버튼";
    }
})


// + 추가적 노트
// 디버깅에 가장 유용한 방법은 콘솔창(f12를 눌러서 나오는 창-> 상단의 console 탭)에 로그를 계속 띄워보는 것입니다.
// console.log()의 키워드를 이용해서 현재 내가 설정한 변수가 적절한 값인지 확인해보세요!
console.log(btn);

// 콘솔창에 너무 많은 내용이 기록되어서 확인하기 어려운가요? 
// console.clear()를 사용하면 콘솔창이 깨끗해집니다.
console.clear();

// 콘솔에 입력하는 일련의 행위들은 최종 베포 때는 깔끔히 삭제해야 합니다.

/*
    최종 JS 실습 키워드 정리
    1. 엄격모드 -> "use strict"
    2. 변수 선언 3가지 -> var, let ,const
    3. DOM Travelsal 3가지 -> getElementByID, getElementsByClassName, querySelctor, querySelctorAll
    4. DOM Manipulation 2가지 -> element.style, textContent
        => 다다음주에 소개드릴 예정이지만, 기본적으로 DOM의 value는 너무 많아서 절대 외우지 못합니다. 구글링하는 방법을 익히시는 편이 더 좋습니다.
    5. Event Handling 1가지 -> addEventListenr
    6. 디버깅 -> console 창 이용
    7. 배열 메소드 1가지 -> forEach
    8. 논리 연산자에 대한 고찰 (== vs ===)
*/