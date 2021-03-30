let instrumentSelect = document.getElementsByClassName("sound-selector")[0]
//select event 발생시
instrumentSelect.addEventListener("change", (event) => {
    //console.log(event.target.value) //nothing, piano, drum

    //define Sounds
    const drumSound = ["clap", "hihat", "kick", "openhat",
        "boom", "ride", "snare", "tom", "tink"]
    const pianoSound = ["do", "re", "mi", "fa", "sol",
        "la", "si", "highdo", "cord"]
    //span
    let spanSound = document.getElementsByClassName("sound")

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