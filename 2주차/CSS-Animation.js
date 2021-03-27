const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    const target = document.querySelectorAll(".transition")[0];
    target.classList.toggle("playing");
});