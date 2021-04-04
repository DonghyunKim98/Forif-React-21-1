"use strict";

const keys = document.querySelectorAll(".key");
const select = document.querySelector("#select");
const drumList = ['clap','hihat','kick','openhat','boom','ride','snare','tom','tink']
const SEList = ["Punch1","Punch2","Punch3","Punch4","Retro1","Retro2","Short1","Short2","Short3"]
const HMList = ["clap1","clap2","clap3","clap4","snap1","snap2","clap5","clap6","clap7"]
let textList = drumList
let select2 = 0;
let audios= document.querySelectorAll(".drum");

function addAudiosToClick(){
    keys.forEach((keys_element)=>{
        
        keys_element.addEventListener("click",()=>{
            
            const filtered = Array.from(audios).filter(audio => audio.getAttribute('value')===keys_element.getAttribute('value'));
            filtered[0].currentTime = 0;
            filtered[0].play();

        })
    })
}

function addAudiosToKey(){
    window.addEventListener("keydown",(event)=>{

        /*audios.forEach((audios_element)=>{

            if(event.key.toLowerCase() === audios_element.getAttribute('value').toLowerCase()){
                audios_element.currentTime = 0;
                audios_element.play();
            }
        })*/

        const filtered = Array.from(audios).filter(audio => event.key.toLowerCase() === audio.getAttribute('value').toLowerCase());
        filtered[0].currentTime = 0;
        filtered[0].play();

        
    })
}       

function changeSounds(){

    select2 = document.querySelector("#select").options.selectedIndex;

    if(select2 === 0){
        audios = document.querySelectorAll(".drum");
        textList = drumList;
    } else if(select2 === 1){
        audios = document.querySelectorAll(".SE");
        textList = SEList;
    } else {
        audios = document.querySelectorAll(".HM");
        textList = HMList;
    }

}

function changeText(){
    const texts = document.querySelectorAll(".sound");
    texts.forEach((element, index)=>{
            element.textContent = textList[index];
    })
}

function addAnimation(){
    keys.forEach((keys_element)=>{

        keys_element.addEventListener("click",()=>{
            keys_element.classList.toggle("playing");
        })

        keys_element.addEventListener("transitionend",()=>{
            keys_element.classList.remove("playing");
        })

        window.addEventListener("keydown",(event)=>{
            if(event.key.toLowerCase() === keys_element.getAttribute('value').toLowerCase()){
                
                keys_element.classList.toggle("playing");
                keys_element.addEventListener("transitionend",()=>{
                    keys_element.classList.remove("playing");
                })
            }
        })
    })
}


select.addEventListener("change", () => {

    select.removeEventListener("change",addAudiosToClick());
    select.removeEventListener("change",addAudiosToKey());
    select.addEventListener("change",changeSounds());
    select.addEventListener("change",changeText());
    select.addEventListener("change",addAudiosToClick());
    select.addEventListener("change",addAudiosToKey());
})

function init(){

    changeText();
    addAudiosToClick();
    addAudiosToKey();
    addAnimation()

}

init();
