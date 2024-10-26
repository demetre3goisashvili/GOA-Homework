class Animal {
    constructor(name, species,age ){
        this.name = name;
        this.species = species;
        this.age = age;
    }
    sound(){
        console.log(this.name, "makes this sound");
    }
    details(){
        console.log("Name: ", this.name);
        console.log("Species: ", this.species);
        console.log("Age: ", this.age, "Years old");
    }
}

let dog = new Animal("Tobi", "Dog", "8");
dog.sound();




class Car {
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    details(){
        console.log("The company of the car is: ", this.company);
        console.log("The model of the car is: ", this.model);
        console.log("The year this car was made in is: ", this.year);
    }
}

let mercedes = new Car("Mercedes", "E-class", "2022");
mercedes.details();

class Human{
    constructor(name,lastname, age, address){
        this.name = name
        this.lastname = lastname
        this.age = age
        this.address = address
    }
    details(){
        console.log("This humans name is: ", this.name)
        console.log("This humans last name is: ", this.lastname)
        console.log("This humans age is: ", this.age)
        console.log("This humans address is: ", this.address)
    }
}




