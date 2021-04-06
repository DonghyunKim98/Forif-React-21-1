const button = document.getElementById("submit_button")

//제출버튼 눌렀을 때
button.addEventListener("click", () => {
    const writtenContent = document.getElementById("written-content").value
    const n = document.getElementsByClassName("applied-content").length

    // let arr = document.getElementsByClassName("applied-content")

    // Array.prototype.forEach.call(arr, (element) => {
    //     element.innerHTML = writtenContent
    // })

    var step
    for (step = 0; step < n; step++) {
        document.getElementsByClassName("applied-content")[step].innerHTML = writtenContent
    }

    document.getElementById("written-content").value = ""
})

//바로 변경사항 반영
function onChange() {
    const writtenContent = document.getElementById("written-content").value
    const n = document.getElementsByClassName("applied-content").length

    var step
    for (step = 0; step < n; step++) {
        document.getElementsByClassName("applied-content")[step].innerHTML = writtenContent
    }
}