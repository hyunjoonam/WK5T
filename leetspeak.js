// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. 
// To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

// > leetspeak('Leet')
// l337

function leetspeak(string) {
    string = string.toLowerCase();
    let array = string.split('');
    console.log(array)
    for (i=0; i<array.length; i++) {
        if (array[i] === 'a') {
            array.splice(i, 1, '4');
        } else if (array[i] === 'e') {
            array.splice(i, 1, '3');
        } else if (array[i] === 'g') {
            array.splice(i, 1, '6');
        } else if (array[i] === 'i') {
            array.splice(i, 1, '1');
        } else if (array[i] === 'o') {
            array.splice(i, 1, '0');
        } else if (array[i] === 's') {
            array.splice(i, 1, '5');
        } else if (array[i] === 't') {
            array.splice(i, 1, '7');
        }
    }
    console.log(array.join(''));
}

leetspeak('Leet')