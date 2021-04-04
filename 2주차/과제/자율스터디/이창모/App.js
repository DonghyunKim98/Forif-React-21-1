//define Sounds
const drumSound = ["clap", "hihat", "kick", "openhat",
    "boom", "ride", "snare", "tom", "tink"]
const pianoSound = ["do", "re", "mi", "fa", "sol",
    "la", "si", "highdo", "cord"]
//span changable
let spanSound = document.getElementsByClassName("sound")


//select event 발생시 화면 전환
let instrumentSelect = document.getElementsByClassName("sound-selector")[0] //listener

instrumentSelect.addEventListener("change", (event) => {
    //console.log(event.target.value) //nothing, piano, drum

    if (event.target.value == "piano") {
        document.body.style.backgroundImage = "url('./images/piano_background.jpg')"
        pianoSound.forEach((element, index, array) => {
            spanSound[index].textContent = element
        })
    }
    else if (event.target.value == "drum") {
        document.body.style.backgroundImage = "url('./images/drum_background.jpg')"
        drumSound.forEach((element, index, array) => {
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


//마우스 클릭 시 소리발생 + 애니메이션 효과
document.querySelectorAll(".key").forEach(item => {
    item.addEventListener("click", event => {
        //애니메이션
        event.preventDefault
        item.classList.remove("key")
        void item.offsetWidth;
        item.classList.add("key")


        //소리
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


//타이핑 시 애니메이션 + 소리 효과
document.addEventListener('keydown', e => {
    let keyCode
    if (e.key !== undefined) {
        keyCode = e.key.toUpperCase()
    } else if (e.keyIdentifier !== undefined) {
        keyCode = e.keyIdentifier.toUpperCase()
    } else if (e.keyCode !== undefined) {
        keyCode = String.fromCharCode(e.keyCode)
    }
    //const keyCode = e.keyCode; // keyCode는 곧 사라진다고 함

    const aa = instrumentSelect.options[instrumentSelect.selectedIndex].value  //악기 종류
    //const bb = String.fromCharCode(keyCode) //알파벳 종류
    if (keyCode == "A" || keyCode == "S" || keyCode == "D" || keyCode == "F" || keyCode == "G" ||
        keyCode == "H" || keyCode == "J" || keyCode == "K" || keyCode == "L") {
        try {//애니메이션
            let arr = Array.from(document.querySelectorAll(".key"))
            arr.forEach((element, index) => {
                if (element.children[0].textContent == keyCode) {
                    e.preventDefault
                    arr[index].classList.remove("key")
                    void arr[index].offsetWidth
                    arr[index].classList.add("key")
                }
            })

            //소리
            const object = document.getElementById(aa + "-sound" + keyCode)
            const audio = new Audio(object.src)
            audio.play()
        } catch (e) {
            console.log(e)
        }

    }
    else {
        alert("그거 누르면 안 됩니다.")
    }
}, false)