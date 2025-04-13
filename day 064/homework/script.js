
function findShort(s){
    s.sort(function(a, b) {
      a.length - b.length
    })
    
    return s[0].length
}






function findShort(str) {
    let words = str.split(' ');
    let shortestLength = Math.min(...words.map(word => word.length));
    return shortestLength;
}

var isSquare = function(n){
  if (n % Math.sqrt(n) === 0 || n === 0){
    return true
}
  else {
    return false
}
}


function timeForMilkAndCookies(date){
  if (date === Date(2013, 11, 24)) {
    return true
}
  else{
    return false
  }
}

function timeForMilkAndCookies(date){
  let month = date.getMonth()
  let day = date.getDate()
  if (month === 11 && day === 24) {
    return true
  }
  else{
    return false
  }
}

// ამ ქოდვარსში მჭირდებოდა გამომეყენებინა sum() მაგრამ ჯავასკრიფტში არარის ამიტომაც გამოვიყენე reduce() რომელიც მოვიძიე

function oddOrEven(array) {
  let sumOfArr = array.reduce(function(a, b){
    return a + b
  }, 0)
  if (sumOfArr % 2 === 0){
    return "even"
}
 else{
   return "odd"
 }
}




function sortByLength (array) {
  array.sort(function(a, b){
    return a.length - b.length
})
  return array
}





// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  ages.sort(function(a, b){
    return a - b
  })
  return [ages[ages.length - 2], ages[ages.length - 1]];

}


// meti ubralod ver gavakete zogi upro rtuli iyo magram vecade rac mtavaria



