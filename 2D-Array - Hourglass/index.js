function hourglassSum(arr) {

    const size = arr.length
    let total = []
    let hourglass = 0
    let greater

    for (var x = 1; x < size - 1; x++) {
        for (var y = 1; y < size - 1; y++) {

            hourglass = arr[x - 1][y] + arr[x - 1][y - 1] +
                arr[x - 1][y + 1] + arr[x][y] +
                arr[x + 1][y] + arr[x + 1][y - 1] +
                arr[x + 1][y + 1]

            total.push(hourglass)
        }

    }

    greater = total.sort(function (a, b) { return a - b; })
    return greater[greater.length - 1]
  
}

let arr = [
    [1 ,1 ,1 ,0 ,0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

let result = hourglassSum(arr)
console.log(result)