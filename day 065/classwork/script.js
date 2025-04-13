document.body.children[0].textContent = "Demetre";
document.body.children[0].style.color = "blue";



function getElClone(id) {
    const element = document.all

    for (let i = 0; i < element.length; i++){
        if (element[i].id === id) {
            return element[i]
        }
    }    
}


