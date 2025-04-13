function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}



let masivi = [
    {name:"jemali", lastName:"vardevanianka"}, 
    {name:"prokopi", lastName:"blebleblelbe"}
]

for (let haha in masivi[0]){
    console.log(masivi[0][haha])
    
}

for (let hahaha in masivi[1]){
    console.log(masivi[1][hahaha])
    
}

