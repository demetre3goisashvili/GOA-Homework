function manualFilter(innerFunc,arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(innerFunc(arr[i])){
           res.push(arr[i]); 
        }
    }

    return res;
}

function positive_detector(num){
    if(num > 0){
        return true;
    }
    return false;
}

// Math.sqrt kvadratul pesvs gvibrunebs
// Math.ceil amrgvalebs zemot
// Math.floot amrgvalebs kvemot
// Math.trunc aclis ricxvs wilad nawils 3.9 = 3\
// Math.pow axarisxeba aris mag Math.pow(3, 3) abrunebs 9
// Math.abs abrunebs ricxvis dadebit mnishvnelobas tu aris uaryopiti
// Math.min abrunebs ricxvebidan yvelaze mcires
// Math.max abrunebs ricxvebidan yvelaze mets



console.log(Math.sqrt(81));
console.log(Math.ceil(4.5232));
console.log(Math.floor(1,313133142));
console.log(Math.trunc(4.25));
console.log(Math.pow(9, 99));
console.log(Math.abs(-11931));
console.log(Math.min(1,2,3,4,5,6,7,-2,-6,2));
console.log(Math.max(55,11,55,1351,67,71,1246,112,51));



let date = 0;
setInterval(function(){
    date ++;
    console.log("Current minutes are " + date);
    if(date === 34){
        console.log("Time up");
        clearInterval();
    }

},60000)


let smth = new Date();


let years = smth.getFullYear();
let month = smth.getMonth();
let dates= smth.getDate();
let day = smth.getDay();
let hour = smth.getHours();
let minute = smth.getMinutes();
let sec = smth.getSeconds();
let msec = smth.getMillieSeconds();


console.log(years);
console.log(month);
console.log(dates);
console.log(day);
console.log(hour);
console.log(minute);
console.log(sec);
console.log(msec);


let date1 = Date( "2022-03-25")

console.log(date1.getFullYear())
console.log(day1.getMonths() )
console.log(day1.getDay)




