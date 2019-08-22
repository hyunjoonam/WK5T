// Tic Tac Toe
// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

// returning 'O' if O makes a row returning 'X' if X makes a row return null if neither makes a row

// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null


function ticTacToe (array) {
    let a1 = array[0][0];
    let a2 = array[0][1];
    let a3 = array[0][2];
    let b1 = array[1][0];
    let b2 = array[1][1];
    let b3 = array[1][2];
    let c1 = array[2][0];
    let c2 = array[2][1];
    let c3 = array[2][2];
    if (a1 === a2 && a2 === a3) {
        console.log(a1)
    } else if (b1 === b2 && b2 === b3) {
        console.log(b1)
    } else if (c1 === c2 && c2 === c3) {
        console.log(c1)
    } else if (a1 === b1 && b1 === c1) {
        console.log(a1)
    } else if (a2 === b2 && b2 === c2) {
        console.log(a2)
    } else if (a3 === b3 && b3 === c3) {
        console.log(a3)
    } else if (a1 === b2 && b2 === c3) {
        console.log(a1)
    } else if (a3 === b2 && b2 === c1) {
        console.log(a3)
    } else {
        console.log('null')
    }
}

ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ])

ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ])

ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ])

ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'O']
    ])