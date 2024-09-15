const me = document.getElementById("myParagraph")
const changed = me.textContent("My name is Demetre")

const get = document.getElementById("changeColor")

const color = get.style.color = "red"

function lengthCount() {
    const getList = document.getElementsByTagName(li)
    console.log(getList.length)
}

console.log(lengthCount())

const heading = getElementById("mainHeading").style.fontSize = "x-large"
const coloring = heading.style.color = "blue"

function myGetElementById(id){
    const allId = document.all;
    for (let i = 0; i < allId.length; i++){
        if (allId[i].id === id){
            console.log(id)
        }
    }
}

function myGetElementByClassName(className){
    const allClass = document.all;
    for (let i = 0;i < allClass.length;i++){
        if (allClass[i].className === className){
            console.log(i)
        }
    }
}

function changeP() {
    const allP = document.getElementsByTagName('p'); 
    for (let p of allP) { 
        p.textContent = "Hello World";
    }
}

changeP();
