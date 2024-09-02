const me = {
    name: "Demetre",
    lastname: "Goisashvili",
    age: 15,
    city: "Batumi",
    smth: function () {
        consolele.log(this.age)
    }
}


me.name = "Jemali"
me.lastname = "Tavdadebulishvili"
me.age = 51
me.city = "Tbilisi"


console.log(me)


console.log(me.name)
console.log(me.lastname)
console.log(me.age)
console.log(me.city)



const obj = {
    // An object is colection of properties it is very usefull for more organized coding
    car: "Mercedes",
    goat: "Messi",
    city: "Kutasisi",
    dog: "Rottweiler",
    food: "Shawarma",
    // we use this keyword to access other properties in concrete object
    goatOfFootball: function(){
        console.log(this.goat)
    },
    // this is a method it is a function and it works for properties
    bestCar: function() {
        console.log(this.car)
    }
}
// this is how we call for our method
obj.func1()
obj.func2()

console.log(obj)


// კონსტრუქტორებს ვიყენებთ რათა ობიექტში კუთვნილების ინიცილიზება ვქნათ
function robotDetail(name, number) {
    this.name = name;
    this.lastname = number;
}
// new ქმნის ახალ ობიექტს სადაც კონსტრუქტორების მიხედვით ამატებს კუთვნილებებს
const robo = new robotDetail("ROBOTISIMON123", 35131)
const robo1 = new robotDetail("ROBOCOP", 72101)
const robo2 = new robotDetail("KINDROBOT", 71893 )