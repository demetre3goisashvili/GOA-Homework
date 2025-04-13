let choose = document.getElementById("choose"); 
let confirm = document.getElementById("con");  


let points = parseInt(localStorage.getItem("points"), 10) || 0;

confirm.addEventListener("click", () => {
    let range = Math.pow(2, points + 1); 
    let randomNum = Math.floor(Math.random() * range) + 1; 

    if (parseInt(choose.value, 10) === randomNum) {
        alert("Congratulations! You have guessed correctly.");
        points++; 
        localStorage.setItem("points", points); 
    } else {
        alert(`Wrong answer! The correct number was ${randomNum}. Try again!`);
    }
});