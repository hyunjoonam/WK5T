// Matrix Addition
// Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd(firstArray, secondArray) {
    let newArray = [];
    let oneArray = [];
    let twoArray = [];
    oneArray.push(firstArray[0][0] + secondArray[0][0], firstArray[0][1] + secondArray[0][1])
    twoArray.push(firstArray[1][0] + secondArray[1][0], firstArray[1][1] + secondArray[1][1])
    newArray.push(oneArray, twoArray)
    console.log(newArray);
}

matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])