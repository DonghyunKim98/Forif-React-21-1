"use strict"; 

const button = document.getElementById("click");
const content = document.querySelectorAll(".content");

function changetext(){
    const input_text = document.getElementById("input_text").value;

    let i;
    for(i=0; i<content.length;i++){
        content[i].textContent = input_text;
    }
}


button.addEventListener("click",()=>{

    const input_text = document.getElementById("input_text").value;

    let i;
    for(i=0; i<content.length;i++){
        content[i].textContent = input_text;
    }

    document.getElementById("form").reset();

})