function findOdd(A) {
    sixshire = new Map()
    
    A.forEach(smth =>{
      sixshire.set(smth , (sixshire.get(smth) || 0 ) +1)
    })
    
    for (let [key, value] of sixshire){
      if (value % 2 !== 0){
        return key
      }
    }
  }