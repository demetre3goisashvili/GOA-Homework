for(let i = 20; i < 51; i ++){
    console.log(i)
}




let smth = 30
while(smth <= 60){
    console.log(smth)
    smth ++
}


document.getElementById("colorful")

function changeColor(color){
    block.style.backgroundColor = color
}

// წინასწარ განსაზღვრული სწორი პაროლი
const correctPassword = "password123";
// მცდელობების რაოდენობა
let attemptsLeft = 3;


while (attemptsLeft > 0) {

    let userPassword = prompt("Enter Password:");
    
   
    if (userPassword === correctPassword) {
        alert("Right Password");
        break;  
    } else {
        attemptsLeft -= 1;  
        if (attemptsLeft > 0) {
            alert("Wrong password. You have ${attemptsLeft} Tries.");
        } else {
            alert("You have no more tries");
        }
    }
}


