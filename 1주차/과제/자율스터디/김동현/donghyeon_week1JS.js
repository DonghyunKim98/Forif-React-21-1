const btn_reset = document.getElementById("button");
const edt_font = document.getElementById("fontSearch");
const edt_type = document.getElementById("typeSome");
const fontSize = document.getElementById("fontSize");
let exs = document.getElementsByClassName("ex");

dragElement(document.getElementById("circle"));

btn_reset.addEventListener("click", ()=>{
    edt_font.value = "";
    edt_type.value = "";
    fontSize.value = "14";
    for(let i = 0; i < exs.length; i++){
        exs[i].innerHTML = "그들의 장비와 기구는 모두 살아있다."
        exs[i].style.fontSize = "14px";
    }
});

function FontChange(e) {
    for(let i = 0; i < exs.length; i++){
        exs[i].style.fontSize = e.value + "px";
    }
}

function TextChange(e) {
    for(let i = 0; i < exs.length; i++){
        exs[i].innerHTML = edt_type.value;
    }
}

function dragElement(elmnt) {
    let clientX_gab = 0, clientX = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      clientX = e.clientX;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      clientX_gab = e.clientX - clientX;
      clientX = e.clientX;
      let leftVal = 0;
      let parentElmnt = elmnt.parentNode;
      if (
        (elmnt.offsetLeft + clientX_gab) < 0 ||
        clientX < parentElmnt.offsetLeft) 
        {
        leftVal = 0;
      } else if(
        (elmnt.offsetLeft + clientX_gab) > parentElmnt.clientWidth ||
        clientX > (parentElmnt.offsetLeft+parentElmnt.clientWidth))
        {
        leftVal = parentElmnt.clientWidth;
      } else {
        leftVal = (elmnt.offsetLeft + clientX_gab);
      }

      let size =  Math.round((leftVal /parentElmnt.clientWidth)*100 *0.4) + 8;
      console.log(size);

      for(let i = 0; i < exs.length; i++){
        exs[i].style.fontSize = size + "px";
      }
      
      elmnt.style.left = leftVal + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}