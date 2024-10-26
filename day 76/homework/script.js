function sameElement(arr1, arr2){
    result = []
    for (i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    return result
}

console.log(sameElement(["a","b","c","d","g","h","k"], ["a","b","c","g"]))