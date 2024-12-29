function greetUser(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greetUser("Demetre", () => {
    console.log("callback is done")
})

function delayMessage(message, callback){
    setTimeout(() =>{
        console.log(message);
        callback();
    }, 2000)
}

delayMessage("Welcome to my Website", () =>{
    console.log("The message has been displayed.")
})

function square(nums, callback){
    setTimeout(()=>{
        const squaredNums = nums.map(nums => nums * nums)
        console.log("proccess done")
        callback(squaredNums)
    }, 2000)
}

square([1, 2, 3, 4], squaredArray => {
    console.log("Squared Array:", squaredArray);
});

function changeColor(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        console.log(`new color${color}`);
        callback();
    }, 2000);
}

changeTextColor("aqua", () => {
    console.log("color changed");
});