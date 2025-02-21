function doubleChar(str) {
    result = ''
    for (let i = 0; i < str.length; i++){
      result += str[i] + str[i]
    }
    return result
  }
  

  function maskify(cc) {
    let result = ''; 
    for (let i = 0; i < cc.length; i++) {
      if (i < cc.length - 4) {
        result += '#'; 
      } else {
        result += cc[i]; 
      }
    }
    return result;
  }
  