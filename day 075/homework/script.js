class Mammal {
    constructor(species, bloodtemp, animaltype, egg){
        this.species = species
        this.bloodtype = bloodtemp
        this.animaltype = animaltype
        this.egg = egg
    }
    desc(){
        console.log("This animal is of ", this.species, " species.")
        console.log("This animal is " , this.bloodtemp)
        console.log("This animal is a ", this.animaltype)
        console.log("This animal can lay egg ", this.egg)
    }
}

class Kangoroo extends Mammal{
    desc(){
        super.desc()
        console.log("This animal is a ", this.species)
        console.log("The Kangoroo is ", this.bloodtemp)
        console.log("The Kangoroo is a ", this.animaltype)
        console.log("The Kangoroo can lay egg ", this.egg)
    }
}

class Bear extends Mammal{
    desc(){
        super.desc()
        console.log("This animal is a ", this.species)
        console.log("The Bear is ", this.bloodtemp)
        console.log("The Bear is a ", this.animaltype)
        console.log("The Bear can lay egg ", this.egg)
    }
}

class NonMammal{
    constructor(species, bloodtemp, animaltype, egg){
        this.species = species
        this.bloodtemp = bloodtemp
        this.animaltype = animaltype
        this.egg = egg
    }
    desc(){
        console.log("This animal is a ", this.species)
        console.log("This animal is ", this.bloodtemp)
        console.log("This animal is a ", this.animaltype)
        console.log("This animal can lay egg ", this.egg)
    }
}

class Frog extends NonMammal{
    desc(){
        super.desc()
        console.log("This animal is a ", this.species)
        console.log("The Frog is ", this.bloodtemp)
        console.log("The Frog is a ", this.animaltype)
        console.log("The Frog can lay egg ", this.egg)
    }
}

class Shark extends NonMammal{
    desc(){
        super.desc()
        console.log("This animal is a ", this.species)
        console.log("The Shark is ", this.bloodtemp)
        console.log("The Shark is a ", this.animaltype)
        console.log("The Shark can lay egg ", this.egg)
    }
}

class Hybrid{
    constructor(species, bloodtemp, animaltype, egg){
        this.species = species
        this.bloodtemp = bloodtemp
        this.animaltype = animaltype
        this.egg = egg
    }
    desc(){
        console.log("This animal is a ", this.species)
        console.log("This animal is ", this.bloodtemp)
        console.log("This animal is a ", this.animaltype)
        console.log("This animal can lay egg ", this.egg)
    }
}

class Platypus extends Hybrid{
    desc(){
        super.desc()
        console.log("This animal is a ", this.species)
        console.log("The Platypus is ", this.bloodtemp)
        console.log("The Platypus is a ", this.animaltype)
        console.log("The Platypus can lay egg ", this.egg)
    }
}

let Bear = new Mammal("Bear", "Warm Blooded", "Hunter", false )

let Shark = new NonMammal("Shark", "Cold Blooded", "Hunter", true)

let Platypus = new Hybrid("Platypus", "Warm Blooded", "Hunter", true)



