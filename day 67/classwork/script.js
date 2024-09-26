const boxDiv = document.getElementById("box")

const left = 0
const position = 1

setInterval(function(){
    left += position

    if(left >= 150 ){
        position = -1
    } else if(left <= 0){
        position = 1
    }

    boxDiv.style.left = left + "px"
}, 30)