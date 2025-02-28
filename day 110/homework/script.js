let row = 3
let col = 3
let arr = []

for (let i = 0; i < row; i++) {
    let temp = []
    for (let j = 0; j < col; j++) {
        temp.push(Number(prompt("Enter element: ")))
    }
    arr.push(temp)
}

function findMean(arr) {
    let row_average = []
    let col_average = []

    for (let i = 0; i < row; i++) {
        let row_res = 0
        let col_res = 0

        for (let j = 0; j < col; j++) {
            row_res += arr[i][j]
            col_res += arr[j][i]
        }

        row_res = row_res / arr[i].length
        row_average.push(row_res)
        col_average.push(col_res)
    }

    return [row_average, col_average]
}

let temp = arr[0][0]
arr[0][0] = arr[row-1][col-1]
arr[row-1][col-1] = temp


