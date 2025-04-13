
const task1 = new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 complete"), 2000);
  });
  
  
const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
}).catch((error) => console.error(error));
  
  
const task3 = new Promise((resolve) => resolve(5))
    .then((num) => num * 2)
    .then((doubled) => console.log(doubled));
  
  
function task4() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("First"), 2000);
    }).then((message) => {
      console.log(message);
      return new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
    }).then(console.log);
}
  
  
function task5() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    }).catch((error) => console.error(error));
}
  
  
function task6() {
    const delay = Math.random() * 4000 + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve("Task 1 complete"), delay);
    });
}
  
function task7() {
    const delay1 = Math.random() * 2000 + 1000;
    const delay2 = Math.random() * 2000 + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve("First"), delay1);
    }).then((message) => {
      console.log(message);
      return new Promise((resolve) => setTimeout(() => resolve("Second"), delay2));
    }).then(console.log);
}
  
 
function task8() {
    const delay = Math.random() * 3000 + 1000;
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), delay);
    }).catch((error) => console.error(error));
}
  
  
function task9() {
    const delay = Math.random() * 4000 + 1000;
    const randomValue = Math.random();
    return new Promise((resolve) => {
      setTimeout(() => {
        if (randomValue > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
}
  
  
function task10() {
    const delay = Math.random() * 3000 + 1000;
    const randomValue = Math.random();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomValue < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    }).catch((error) => console.error(error));
}