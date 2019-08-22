// Matrix Multiplication
// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

// https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro

// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

// 2 4  5 2
// 3 4  3 1

function matrixMultiply(firstMatrix, secondMatrix) {
    let newArray = [];
    let matrixOne = [];
    let matrixTwo = [];
    matrixOne.push((firstMatrix[0][0] * secondMatrix[0][0]) + (firstMatrix[0][1] * secondMatrix[1][0]), (firstMatrix[0][0] * secondMatrix[0][1]) + (firstMatrix[0][1] * secondMatrix[1][1]))
    matrixTwo.push((firstMatrix[1][0] * secondMatrix[0][0]) + (firstMatrix[1][1] * secondMatrix[1][0]), (firstMatrix[1][0] * secondMatrix[0][1]) + (firstMatrix[1][1] * secondMatrix[1][1]))
    newArray.push(matrixOne, matrixTwo)
    console.log(newArray);
}

matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])