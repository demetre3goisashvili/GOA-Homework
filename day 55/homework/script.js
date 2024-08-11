let x = 5
let name = "Demetre"
const PI = 3.14
let y = x
let isStudent = true
let age = 0
x = 10
let greeting = "Hello, World!"
let height = null
let num = 3 + 2
let total = 10 + 20
let language = "JavaScript"
let isAvailable = false
let message = "Wecome to JavaScript"
let temperature = 25
let score = 100
let fullName = "Demetre Goisashvili"
let isOnline = false

function sayHello() {
    return "Hello World!"
}

console.log(sayHello())


function addNumbers(a, b) {
    return a + b
}

console.log(addNumbers(10, 20))

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(getFullName("Demetre", "Goisashvili"))

function multiply(a , b) {
    return a * b
}

console.log(multiply(9, 9))

function isOdd(number) {
    return number % 2 === 0;
}

console.log(isOdd(2))

function square(a) {
    return a * a
}
console.log(square(999))

function isEqual(a, b) {
    return a === b
}

console.log(isEqual(5, 5))

function subtract(a, b) {
    return a / b
}

console.log(subtract(7, 4))

function isGreater(a, b) {
    return a > b
}

console.log(isGreater(4, 10))

function promptForName() {
    let name = prompt("What is your name?")
    alert("Hello, " + name + "!")
}
promptForName()

function addTwoNumbers() {
    let num1 = prompt("Enter The First Number")
    let num2 = prompt("Enter The Second Number")
    alert("The anwser is" + num1 + num2)
}

addTwoNumbers()

function convertToNumber() {
    let num = prompt("Please enter anything")
    alert(Number(num))
}

convertToNumber()

function getFavouriteColor() {
    let color = prompt("Please enter your favourite color")
    return "Your favourite color is " + color
}
console.log(getFavouriteColor())

function getAge() {
    let age = prompt("Please enter your age")
    alert("You are" + age + " years old")
}
getAge()


function subtractNumbers() {
    let num1 = prompt("Please enter first number")
    let num2 = prompt("Please enter second number")
    alert("The anwser is" + num1 / num2)
}
subtractNumbers()

function favouriteMovie() {
    let movie = prompt("Please enter yout favourite movie")
    alert("Your favourite movie is " + movie)
}
favouriteMovie()

function squareNumber() {
    let num = prompt("Please enter a number to make it square")
    alert("The anwser is " + num * num)
}
squareNumber()

function oddOrEven() {
    let num = prompt("Please enter a number")
    if (num % 2 === 0){
        alert("This number is Even")
    }
    else {
        alert("This number is Odd")
    }
}
oddOrEven()

function repeatString() {
    let string = prompt("Please enter a string")
    alert(string + " " + string)
}
repeatString()







