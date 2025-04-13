let userColor = document.getElementById("color");
let change = document.getElementById("change");

change.addEventListener("click", () => {
  if (userColor) {
    let color = userColor.value; 
    localStorage.setItem("background", color); 
    let body = document.querySelector("body");
    body.style.backgroundColor = color; 
  }
});


let storageColor = localStorage.getItem("background");
if (storageColor) {
  let body = document.querySelector("body");
  body.style.backgroundColor = storageColor; 
}