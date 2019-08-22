function printNumbersFor(startNum, endNum) {
    for (let i = startNum; i < endNum+1; i++) {
        console.log(i);
    }
}
printNumbersFor(1, 10);
console.log('for');

function printNumbersWhile(startNum, endNum) {
    let i = startNum;
    while (i < endNum+1) {
        console.log(i++);
    }
}
printNumbersWhile(1, 10);
console.log('while');