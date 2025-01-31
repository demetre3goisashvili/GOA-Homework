function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    if (Number.isInteger(square)){
      return (square + 1) ** 2
    }else{
      return -1
    }
  }



function solution(str, ending){
    if (str.endsWith(ending)){
      return true
    }else{
      return false
    }
  }