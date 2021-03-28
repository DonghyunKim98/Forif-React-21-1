const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    const target = document.querySelectorAll(".transition")[0];
    // https://velog.io/@rimu/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-classList.add-remove-contains-toggle
    // classList는 해당 DOM의 Class 배열들을 관리합니다.
    // 특히 CSS 관련 함수를 처리할 때 용이합니다.
    target.classList.toggle("playing");
});