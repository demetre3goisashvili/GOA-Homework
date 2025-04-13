const person = { name: 'Alice', age: 25, city: 'New York' };

const {name, age} = person;

const nestedArray = [1, [2, 3, [4, 5]]];

const [,[,,[value]]] = person

console.log(value)

const fruits = ['apple'];

const [fruit, fruit2 = "pear"] = fruits

const user = { id: 101, username: 'john_doe' };

const {id: userId, username: userName} = user



const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const merge = [...array1, ...array2];

const colors = ['red', 'green', 'blue'];
// Create a copy of 'colors'

const clone = [...colors]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Merge obj1 and obj2

const objMerge = {...obj1, ...obj2}

const numbers = [10, 20, 30, 40, 50];
// Destructure the first element and gather the remaining elements

const [start, ...rest] = numbers

console.log(start)
console.log(rest)


function restFunc(...smth){
    console.log(smth)
}

let smth = ["Demetre", "Goisashvili", "Galaxy Destroyer"]


const nums = [1, 2, 3];
// Function that takes 3 parameters
function add(a, b, c) {
    return a + b + c
}

const result = add(...nums)

const user1 = { name: 'John', age: 30 };
// Create a clone of 'user'

let user1Clone = {...user1}

const car = { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'blue' };
// Destructure 'brand' and 'model' and gather the remaining properties

const {first, second, ...restt} = car

const fruit1 = ['banana', 'cherry'];
// Add 'apple' at the beginning and 'mango' at the end using the spread operator

const newFruit = ["apple", ...fruit1, "mango"] 










