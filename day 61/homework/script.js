const person = {
    name: "Demetre",
    age: 15,
    city: "Batumi"

}
person.age = 14

person.hobby = "Football"

person.city = delete

console.log(person)

const calculator = {
    calculate: function(a, b) {
        return a + b
    }
}

console.log(calculator.calculate(15, 16))

const harryPotter = {
    title: "Harry Potter",
    author: "J.K Rowling",
    pages: 3407
}

const theBible = {
    title: "The Holy Bible",
    author: "Unknown",
    pages: 1200
}

const theLordOfTheRings = {
    title: "The lord of the rings",
    author: "J. R. R. Tolkien",
    pages: 1137

}

function createAnimal(name, sound) {
    this.name = name
    this.sound = sound
    this.makeSound = function() {
        console.log(this.sound)
    }
    this.changeName = function(changedName) {
        this.name = changedName
    }
}

const dog = new createAnimal("Dog", "Woof")
dog.makeSound()

const cat = new createAnimal("Cat", "Meow")
cat.makeSound()





