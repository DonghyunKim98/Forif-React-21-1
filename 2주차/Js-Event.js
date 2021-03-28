const btn = document.getElementById("btn");
const input = document.getElementById("input");
function onBtnClickListener(event){
    console.log(event.currentTarget);
    console.log(event);
}
function onBtnContextMenu(event){
    event.preventDefault();
    console.log("우클릭!");
}
function onInputKeyDownListener(event){
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
    // tempelate literal 이라고 하는 JS만의 문법입니다.
    // string 안에서 변수를 나타내기 용이합니다.
    console.log(`${event.key}가 눌러졌어요!`);
}
btn.addEventListener("click",onBtnClickListener);
btn.addEventListener("contextmenu",onBtnContextMenu);

input.addEventListener("keydown",onInputKeyDownListener);