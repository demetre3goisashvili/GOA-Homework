function gimme (triplet) {
    const minNumber = Math.min(...triplet);
    const maxNumber = Math.max(...triplet);
    
    for(let i = 0; i < 3; i++){
      if(triplet[i] != minNumber && triplet[i] != maxNumber){
        return i
      }
    }
}

function removeDuplicateWords (s) {
    const words = s.split(" ");
    const result = [];
    
    for(let i = 0; i < words.length; i++){
      if(result.indexOf(words[i]) === -1){
        result.push(words[i]);
      }
    }
    
    return result.join(" ")
}

