const selector = document.querySelector('.custom-select-wrapper');
const selectorList = document.querySelector('.custom-select');
const options = document.querySelectorAll(".custom-option");
const background = document.querySelector('#intro_bg');
const keys = document.querySelectorAll('.key');
const soundText = document.querySelectorAll('.sound');

const text = [["clap", "hithat", "kick", "openhat", "boom", "ride", "snare", "tom", "timk"],
              ["c", "d", "e", "f", "g", "a", "b", "c", "d"],
              ["c", "d", "e", "f", "g", "a", "b", "c", "d"]];

let selected = 0;

keys.forEach(function(element) {
    element.addEventListener('click', function(){
        element.classList.remove('playing');
        void element.offsetWidth;
        element.classList.add('playing');
        
        const x = element.childNodes[1].textContent;
        const audio = document.getElementsByClassName(x)[selected];
        console.log(audio);
      
        if(audio){
            audio.currentTime = 0;
            audio.play();
        }
    })
});

window.addEventListener('keydown', (event) => {
    const keyName = event.key.toUpperCase();
    try{
        const element = document.getElementById(keyName);
        element.classList.remove('playing');
        void element.offsetWidth;
        element.classList.add('playing');
    
        const audio = document.getElementsByClassName(keyName)[selected];
        
        if(audio){
            audio.currentTime = 0;
            audio.play();
        }
    } catch(error){
        alert("제대로 좀 해봐,,,");
    }
    
});

options.forEach(function(element) {
    element.addEventListener('click', changeSelected);
});

selector.addEventListener('click', openList);

function openList(){
    selectorList.classList.toggle('open');
}

function changeSelected(){
    if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
    }

    switch(this.textContent){
        case "드럼" : background.style.backgroundImage = "url(../Forif_hw2/images/drum.jpg)";
                      selected = 0;
                      setText();
                      break;
        case "피아노" : background.style.backgroundImage = "url(../Forif_hw2/images/piano.jpg)";
                        selected = 1;
                        setText();
                        break;
        case "sin파..." : background.style.backgroundImage = "url(../Forif_hw2/images/sin.png)";
                          selected = 2;
                          setText();
                          break;
    }
}

function setText(){
    console.log("check");
    soundText.forEach(function(element, index){
        element.textContent = text[selected][index];
        console.log(text[selected][index]);
    })
}