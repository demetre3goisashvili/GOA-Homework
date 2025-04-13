let dd = document.getElementById("dd");
let mm = document.getElementById("mm");
let yyyy = document.getElementById("yyyy");
let submit = document.getElementById("submit");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();


let ddSpan = document.getElementById("dd-span")
let mmSpan = document.getElementById("mm-span")
let yySpan = document.getElementById("yy-span")

submit.addEventListener("click", function(event) {
    event.preventDefault();

    
    let inputYear = Number(yyyy.value);
    let inputMonth = Number(mm.value);
    let inputDay = Number(dd.value);

    let existingMessage = document.getElementById("error-message");

    
    if (inputYear > year ){
        
        if (!existingMessage) {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "year must be in the past.";
            errorMessage.id = "error-message";
            errorMessage.style.color = "red";
            submit.parentNode.insertBefore(errorMessage, submit); 
        }
    } else {
        
        if (existingMessage) {
            existingMessage.remove();
        }

       
    }


    let existingMessage1 = document.getElementById("error-message1");
    if (inputMonth > month && inputYear === year ){
        
        if (!existingMessage1) {
            let errorMessage1 = document.createElement("p");
            errorMessage1.textContent = "month must be in the past.";
            errorMessage1.id = "error-message1";
            errorMessage1.style.color = "red";
            submit.parentNode.insertBefore(errorMessage1, submit); 
        }
    } else {
        
        if (existingMessage1) {
            existingMessage1.remove();
        }

    }

    let existingMessage2 = document.getElementById("error-message2");
    if (inputDay > day && inputMonth === month && inputYear === year){

        if (!existingMessage2) {
            let errorMessage2 = document.createElement("p");
            errorMessage2.textContent = "day must be in the past.";
            errorMessage2.id = "error-message2";
            errorMessage2.style.color = "red";
            submit.parentNode.insertBefore(errorMessage2, submit); 
        }
    } else {
        
        if (existingMessage2) {
            existingMessage2.remove();
        }

    }


    let yearDifference = year - inputYear;
    let monthDifference = month - inputMonth;
    let dayDifference = day - inputDay;

   
    if (dayDifference < 0) {
        monthDifference -= 1;
        dayDifference += new Date(year, month - 1, 0).getDate(); 
    }

    
    if (monthDifference < 0) {
        yearDifference -= 1;
        monthDifference += 12;
    }

    
    ddSpan.textContent = dayDifference;
    mmSpan.textContent = monthDifference;
    yySpan.textContent = yearDifference;

    let existingMessage3 = document.getElementById("error-message3");
    if (!inputYear){
        if (!existingMessage3) {
            let errorMessage3 = document.createElement("p");
            errorMessage3.textContent = "This field is required.";
            errorMessage3.id = "error-message3";
            errorMessage3.style.color = "red";
            submit.parentNode.insertBefore(errorMessage3, submit); 
        }
    } else {
        
        if (existingMessage3) {
            existingMessage3.remove();
        }

        
    }
    let existingMessage4 = document.getElementById("error-message4");
    if (!inputMonth){
        if (!existingMessage4) {
            let errorMessage4 = document.createElement("p");
            errorMessage4.textContent = "This field is required.";
            errorMessage4.id = "error-message4";
            errorMessage4.style.color = "red";
            submit.parentNode.insertBefore(errorMessage4, submit); 
        }
    } else {
        
        if (existingMessage4) {
            existingMessage4.remove();
        }

        
    }
    let existingMessage5 = document.getElementById("error-message5");
    if (!inputDay){
        if (!existingMessage5) {
            let errorMessage5 = document.createElement("p");
            errorMessage5.textContent = "This field is required.";
            errorMessage5.id = "error-message5";
            errorMessage5.style.color = "red";
            submit.parentNode.insertBefore(errorMessage5, submit); 
        }
    } else {
        if (existingMessage5) {
            existingMessage5.remove();
        }

    }
    
    setTimeout(function() {
    }, 3000);
});