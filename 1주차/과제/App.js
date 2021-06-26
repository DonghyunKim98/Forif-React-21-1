"use strict"; 

const fontapply = document.querySelectorAll(".fontapply");
const button = document.getElementById("button-id");

button.addEventListener("click",()=>{
    const UserInputText = document.getElementById("UserInputText-id");
    
    for(let i=0; i<fontapply.length; i++){
        fontapply[i].textContent = UserInputText.value;
    }

    UserInputText.value = '';
});