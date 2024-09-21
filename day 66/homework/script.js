const newP = document.createElement('p')
newP.id = "firstP"
document.body.appendChild(newP)

const newDiv = document.getElementById("div")

const clone = newDiv.cloneNode(true)

const ollist = document.getElementById("ollist")

ollist.removeChild(ollist.firstElementChild)

const newElement = document.createElement("h1")

const newh2 = document.getElementById("newh2")


document.body.appendChild(newElement)


document.body.replaceChild(newh2, newElement)

const listChild = ollist.children[2]

listChild.remove()


const hwDiv = document.createElement('div')
hwDiv.id = "hwdiv"
document.body.appendChild(hwDiv)

const span1 = document.createElement('span')
hwDiv.appendChild(span1)

const span2 = document.createElement('span')
hwDiv.appendChild(span2)

const span3 = document.createElement('span')
hwDiv.appendChild(span3)

const eventButton = document.createElement("button")
eventButton.textContent = "Click here"

eventButton.addEventListener("click", function(){
    alert("you have clicked this button")
} )

const buttonClone = eventButton.cloneNode(true)
document.body.appendChild(buttonClone)











