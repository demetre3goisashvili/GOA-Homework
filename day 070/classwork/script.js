const names = ["demetre", "car", "mercedes"]

names.forEach((value, _, _) => {
    console.log(value)
})

names.forEach((_ , index, _) => {
    console.log(index)
})

names.forEach((_ , _, arr) => {
    console.log(arr)
})


const nums = [39, 123, 53]
let sumNum = 0
function allSum(){
    sumNum += nums
}

nums.forEach(allSum())



function clone() {
    let number = [1,2,3,4,5,6,7,8,9,10]
    for (let i = 0; i < number.length; i++ ){
        console.log(number[i])
        console.log(i)
        console.log(number)
    }
}




// forEach metodis daxmarebi chven shegvidzlia shevimoklot kodis wera, is aertianebs indexis, elementis, da mtlianad arrays gamotanas

const num = [1,2,3,4,5,6,7,8,9.10]

const mapNum = num.map(Math.sqrt)

console.log(mapNum)

function manualMap(arr, customFunc){
    let result
    for (let i = 0; i < arr.length; i++){
        result.push(customFunc(arr[i], i, arr))
    }
}

function manualFilter(arr, customFunc){
    let result = []
    for (let i = 0; i < arr.length; i++){
        if(customFunc(arr[i], i, arr)){
            resultArr.push(result)
        }
        return result
    }

}

