function palindrome(num) { 
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
      return "Not valid";
    }
  
    const str = num.toString();
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 2; j <= str.length; j++) {
        const sub = str.slice(i, j);
        if (sub === sub.split('').reverse().join('')) {
          count++;
        }
      }
    }
  
    return count;
  }

// 34 jgupshi gadmovedi