class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    printColor() {
        console.log(`The color of this car is ${this.color}`);
    }
    printModel() {
        console.log(`The model of this car is ${this.model}`);
    }
}

let mercedes = new Car('blue', 'mercedes');
console.log(mercedes); 
mercedes.printColor(); 
mercedes.printModel(); 

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.name} goes "${this.sound}!"`);
    }
}


let dog = new Animal("dog", "bark");
let cat = new Animal("cat", "meow");
let cow = new Animal("cow", "moo");
let lion = new Animal("lion", "roar");
let snake = new Animal("snake", "hiss");


dog.makeSound();
cat.makeSound();
cow.makeSound();
lion.makeSound();
snake.makeSound();

