const button = document.getElementById('button');
const input = document.getElementById('inputText');
const contents = document.querySelectorAll(".content");
const form = document.getElementById('form');

function applyFont(){
    contents.forEach((value,index)=> {
        value.textContent=input.value;
    })

    form.reset();
}

function init(){
    button.addEventListener("click",applyFont);
}

init();