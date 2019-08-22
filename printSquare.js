function printSquare(size) {
    for (let i=0; i<size; i++) {
        let square = "";
        for (let j=0; j<size; j++) {
            square += '*'
        }
        console.log(square);
    }
}
printSquare(5);

function printSquare(size) {
    for (let i=0; i<size; i++) {
        let square = []
        for (let j=0; j<size; j++) {
            square.push('*');
        }
        console.log(square.join(''));
    }
}
printSquare(5);