function budget() {
    let user_budget = prompt("Please enter your budget")
    mobile_price = 1499

    if (user_budget >= mobile_price) {
        console.log("You can buy this product.")
    }
    else {
        console.log("You can not buy this product.")
    }

}

budget()

for(let i = 20; i >= 0; i--){
    console.log(i)
}


function even_sum(num) {
    let sum = 0
    for(let i = 0; i < num; i++) {
        if(i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(even_sum(21));



