//define Sounds
const drumSound = ["clap", "hihat", "kick", "openhat",
    "boom", "ride", "snare", "tom", "tink"]
const pianoSound = ["do", "re", "mi", "fa", "sol",
    "la", "si", "highdo", "cord"]
//span
let spanSound = document.getElementsByClassName("sound")


//select event 발생시 화면 전환
let instrumentSelect = document.getElementsByClassName("sound-selector")[0]

instrumentSelect.addEventListener("change", (event) => {
    //console.log(event.target.value) //nothing, piano, drum

    if (event.target.value == "piano") {
        document.body.style.backgroundImage = "url('./images/piano_background.jpg')"
        pianoSound.forEach(function (element, index, array) {
            spanSound[index].textContent = element
        })
    }
    else if (event.target.value == "drum") {
        document.body.style.backgroundImage = "url('./images/drum_background.jpg')"
        drumSound.forEach(function (element, index, array) {
            spanSound[index].textContent = element
        })
    }
    else if (event.target.value == "nothing") {
        document.body.style.backgroundImage = "url('./images/none_background.png')"
        Array.prototype.forEach.call(spanSound, (element, index) => {
            spanSound[index].textContent = ""
        })
    }
})
document.body.style.transition = "all 1s"


//클릭 시 소리발생 + 애니메이션 효과
document.querySelectorAll(".key").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault
        item.classList.remove("key")
        void item.offsetWidth;
        item.classList.add("key")


        const aa = instrumentSelect.options[instrumentSelect.selectedIndex].value  //악기 종류
        const bb = item.children[0].textContent //알파벳 종류
        //const cc = item.children[1].textContent //소리 종류
        try {
            const object = document.getElementById(aa + "-sound" + bb)
            const audio = new Audio(object.src)
            audio.play()
        } catch (e) {
            console.log("none page would be")
        }
    }, false)
})