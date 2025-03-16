function elimination(arr){
    for (let i = 0; i < arr.length; i++){
         for (let j = i + 1; j < arr.length; j++){
             if (arr[i] === arr[j]){
                 return arr[i]
             }
         }
     }
   return null
   
 
 }

 function elevatorDistance(array) {
    res = 0;
    for (let i = 0; i < array.length - 1; i++) { 
      if (array[i] > array[i + 1]) { 
        res += array[i] - array[i + 1]; 
      }
      else if (array[i] < array[i + 1]) { 
        res += array[i + 1] - array[i]; 
      }
    }
    return res
  }