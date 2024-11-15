const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
let image = document.querySelector("#car")
const carArr = ["car1.png", "car2.png", "car3.png"]
let index = 0

next.addEventListener("click", function(){
    index++
    if(index >= carArr.length){
        index = 0
    }
    image.src = carArr[index]
})
prev.addEventListener("click",function(){
    index--
    if(index < carArr.length){
        index = 2
    }
    image.src = carArr[index]
})



const div = document.querySelector('#parent');
const button = document.querySelector('button');

let counter = 0;

button.addEventListener('click', function(){
    const p = document.createElement('p');
    p.textContent = 'Paaragraph ' + counter;
    p.id = counter;

    div.appendChild(p);

    counter++;
})



const getDiv = document.querySelector("#par")

getDiv.removeChild(getDiv.firstElementChild)


const thirdChild = getDiv.children[3]

getDiv.remove(thirdChild)



