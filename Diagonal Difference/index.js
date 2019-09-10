function diagonalDifference(arr) {

    let size = arr.length
    let primaryDiagonal = 0
    let seconderyDiagonal = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i===j){
                primaryDiagonal += arr[i][j]
            }

            if ((i + j) === (size - 1)){
                seconderyDiagonal += arr[i][j]
            }
        }
    }

    console.log(`O valor da diagonal principal é: ${primaryDiagonal}`)
    console.log(`O valor da diagonal secundária é: ${seconderyDiagonal}`)
    return Math.abs(primaryDiagonal - seconderyDiagonal)
}

let arr = [
    [1, 2, 3],
    [3, 4, 5],
    [7, 4, 2]
]

let result = diagonalDifference(arr)
