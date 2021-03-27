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
    console.log(`${event.key}가 눌러졌어요!`);
}
btn.addEventListener("click",onBtnClickListener);
btn.addEventListener("contextmenu",onBtnContextMenu);

input.addEventListener("keydown",onInputKeyDownListener);