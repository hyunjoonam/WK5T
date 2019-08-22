// Rock Paper Scissors
// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

// > rockPaperScissors('rock', 'scissors')
// 'player 1'
// > rockPaperScissors('rock', 'paper')
// 'player 2'
// > rockPaperScissors('paper', 'paper')
// 'draw'

function rockPaperScissors(player1, player2) {
    let rock = 'rock'
    let scissors = 'scissors'
    let paper = 'paper'
    if (player1 === player2) {
        console.log('draw')
    } else {
        if (player1 === rock) {
            if (player2 === scissors) {
                console.log('player 1')
            } else {
                console.log('player 2')
            }
        } else if (player1 === scissors) {
            if (player2 === paper) {
                console.log('player 1')
            } else {
                console.log('player 2')
            }
        } else if (player1 === paper) {
            if (player2 === rock) {
                console.log('player 1')
            } else {
                console.log('player 2')
            }
        }
    }
}

rockPaperScissors('rock', 'scissors')
rockPaperScissors('rock', 'paper')
rockPaperScissors('paper', 'paper')
rockPaperScissors('scissors', 'paper')