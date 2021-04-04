"use strict";
const drumName = ["clap","hihat","kick","openhat","boom","ride","snare","tom","tink"];
const guitarName = ["A7","Amaj","Amin","Cmaj","Dmaj","Dmin","Emaj","Emin","Gmaj"];

class Instrument {
    constructor(name){
        this.name=name;
    }
    get name(){
        return this.name;
    }
    set name(name){
        this.name=name;
    }
    changeSoundName(keys){
        keys.forEach((key,index)=>key.childNodes[3].textContent=this.name[index]);
    }
}

class CustomEvent {
    constructor(keys,instSelector){
        this.keys=keys;
        this.instSelector=instSelector;
    }
    get keys(){
        return this.keys;
    }
    set keys(keys){
        this.keys=keys;
    }
    get instSelector(){
        return this.instSelector;
    }
    set instSelector(instSelector){
        this.instSelector=instSelector;
    }
    initCustomEvent(){
        const drumInst = new Instrument(drumName);
        drumInst.changeSoundName(this.keys);
        this.keys.forEach((key)=>{
            // 클래스안에 있는 method를 콜백함수로 사용하면, 콜백함수로 인자가 넘어가지 않습니다.
            // 다음과 같이 arrow Function을 이용하여 인자를 넘겨주면 됩니다.
            key.addEventListener('transitionend', (event)=>this.removeTransition(event));
            key.addEventListener('click',(event)=>this.playSoundClick(event));
        })
        window.addEventListener("keydown",(event)=>this.playSoundKeyDown(event));
        instSelector.addEventListener("change",(event)=>this.instChangeListener());
    }
    playSound(value){
        const currentInst = this.instSelector.value;
        const audio = document.querySelector(`audio[value="${value}"][inst="${currentInst}"]`);
        const key = document.querySelector(`div[value="${value}"]`);
        if (!audio) {
        alert("그런 소리 없다!") ;
        return;
        }

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
    playSoundKeyDown(event){
        this.playSound(event.key);
    }
    playSoundClick(event){
        const currentDOMValue= event.currentTarget.getAttribute("value");
        playSound(currentDOMValue);
    }
    instChangeListener(){
        const currentInst = this.instSelector.value;
        if(currentInst==="drum"){
            const drumInst = new Instrument(drumName);
            drumInst.changeSoundName(this.keys);
            return;
        }
        const guitarInst = new Instrument(guitarName);
        guitarInst.changeSoundName(this.keys);
    }
    removeTransition(event){
        if (event.propertyName !== 'transform') return;
        event.currentTarget.classList.remove('playing');
    }
}

function init(){
    const keys = document.querySelectorAll('.key');
    const instSelector = document.querySelector('.instSelector');
    const customEvent = new CustomEvent(keys,instSelector);
    customEvent.initCustomEvent();
};

init();