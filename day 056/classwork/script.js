let True = true
let False = false

console.log(True || False)
console.log(True && False)
console.log(False && False)
console.log(15 > 10 || 10 === 10)
console.log(True && True)
console.log(True === False)


function numDifference() {
    let user_num1 = prompt("Please enter your first number")
    let user_num2 = prompt("Please enter your second number")

    if (user_num1 > user_num2){
        console.log("The first number is greater than second")
    }
    else if (user_num1 === user_num2){
        console.log("The numbers are equal to eachother")
    }
    else if (user_num2 > user_num1){
        console.log("The second number is greater than first")
    }
}

numDifference()


let obj = {
    car : "Mercedes",
    home : "Saxli"    
}

console.log(obj.car)