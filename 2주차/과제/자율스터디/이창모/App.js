let instrumentSelect = document.getElementsByClassName("sound-selector")[0]
instrumentSelect.addEventListener("change", (event) => {
    //console.log(instrumentSelect.textContent)
    console.log(event.target.value) //nothing, piano, drum
})