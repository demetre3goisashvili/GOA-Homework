let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

let arr1cp = [...arr1]
let arr2cp = [...arr2]


console.log(arr1cp == arr2cp)


function shedareba(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false
    } 
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
            return false
        }
    }
    return true

    
}

console.log(shedareba([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])); 


