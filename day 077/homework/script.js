function printPositions(rows, cols) {
    for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
            console.log(`row: ${row} col: ${col}`);
        }
    }
}

printPositions(2, 2);


function calc(){
    let result = []
    for (let i = 1; i < 11; i++){
        for (let j = 1; j < 11; j++){
            result.push(j * i)
        }
        return result
    }
}

function colRow(nums){
    let result = []
    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j <= nums; j++){
            if(i < j){
                result.push(`${i}, ${j}`)
            }
        }
    }
}