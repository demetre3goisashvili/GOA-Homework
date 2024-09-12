
function findShort(s){
    s.sort(function(a, b) {
      a.length - b.length
    })
    
    return s[0].length
}


console.log(findShort("arasf asfasf sss afasf ff g"))



    