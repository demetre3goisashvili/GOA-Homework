function matrixsum(matrix1, matrix2){
    let res = []
    for (let i = 0; i < matrix1.length; i++){
        let calc = []
        for (let j = 0; j < matrix1[0].length; j++){
            calc.push(matrix1[i][j] + matrix2[i][j])
        }
        res.push(calc)
    }
    return res
}

function transform(matrix){
    let res = []
    for (let i = 0; i < matrix[0].length; i++){
        let calc = []
        for (let j = 0; j < matrix.length; j++){
            calc.push(matrix[j][i])
        }
        res.push(calc)
    }
    return res
}


