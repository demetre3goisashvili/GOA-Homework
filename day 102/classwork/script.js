function Check() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Check the Homework");
        }, 1000); 
    });
}

function Complete() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Homework Completed");
        }, 2000); 
    });
}

function Anwser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random();
            if (randomValue > 0.5) {
                resolve(`You have Completed the homework and got ${Math.floor((randomValue * 10))} points`);
            } else {
                reject("You Failed!");
            }
        }, 3000);
    });
}


Check()
    .then((message) => {
        console.log(message);
        return Complete();
    })
    .then((message) => {
        console.log(message);
        return Anwser();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });