const content = Array.from(document.getElementsByClassName("content"))
const button = document.getElementById('button')

// function ChangeColor(element) {
//   element.style.backgroundColor = "red"
// }

// content.forEach(ChangeColor)

// const text = document.getElementById('input_text').value;

// function message(element) {
//     element.addEventListener(message, content)
// }

// message(text)
// const grandparent = document.getElementById("grandparent-id")

// grandparent.style.backgroundColor = "red"

button.addEventListener('click', () => { 

  const text = document.getElementById('input_text').value;
  
  for(i=0;i<=content.length;i++) {
    content[i].textContent = text
  }

});

