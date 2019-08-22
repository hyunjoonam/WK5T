// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

// > sumNumbers([1, 4, 8])
// 13

function sumNumbers(array) {
    let num = 0;
    for (i=0; array.length>i; i++) {
        num += array[i];
        }
    console.log(num)
}

sumNumbers([1, 4, 8])
sumNumbers([3, 0, 5, 8])