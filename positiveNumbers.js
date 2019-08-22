// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []


function positiveNumbers(array){
    // let positiveArray = [];
    // array.forEach(num => {
    //     if (num >= 0) {
    //         positiveArray.push(num);
    //     }
    // });
    // console.log(positiveArray);

    // let positiveArray = [];
    // for (i=0; array.length>i; i++) {
    //     if (array[i] >= 0) {
    //         positiveArray.push(array[i]);
    //     }
    // }
    // console.log(positiveArray)

    let positiveArray = array.filter(num => num >= 0);
    console.log(positiveArray)
}

positiveNumbers([1, -3, 5, -3, 0])
positiveNumbers([1, 2, 3])
positiveNumbers([-1, -2, -3])