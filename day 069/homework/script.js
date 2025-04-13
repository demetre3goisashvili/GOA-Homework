let numArr = [1,2,3,4,5,6,7,8,9,10]

for(i in numArr) {
    console.log(i)
}

// amit gamogvakvs elementebis indexi an vpoulobt

for (i of numArr){
    console.log(i)
}

// amit gamogvakvs elementebi

const arrowFunc = () => 15 + 10
console.log(arrowFunc())

// arrow funtions viyenebt imistvis rom funkciebi martivi sintaxit davwerot.

// ratom aris var-is gamoyeneba cudi

if(true){
    var bad = "I am very bad"
}

console.log(bad)
// Var-s ar gaachnia block scope eseigi misi gamodzaxeba shegvidzlia code block-is garet rac dzalian cudi sheidzleba iyos upro grdzeli kodistvis da errorebi gamoiwvios.
// aseve var-s akvs hoisting romelic nebismier var-it shekmnil cvladis deklaracia adis tavshi code block-shic rom iyos
