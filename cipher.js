// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

// > cipher('Genius without education is like silver in the mine')
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphaArray = alphabet.split("");
let shiftedArray = alphaArray.slice(13).concat(alphaArray.slice(0,13))

function cipher(string) {
    string = string.toLowerCase();
    inArray = string.split("");
    let cipherArray = [];
    let ciphered = '';
    for (let i=0; i<inArray.length; i++) {
        for (let j=0; j<alphaArray.length; j++) {
            if (inArray[i]===alphaArray[j]) {
                ciphered = shiftedArray[j];
                cipherArray.push(ciphered);
            } else if (inArray[i] === ' ') {
                cipherArray.push(' ');
                break
            } 
        }
    }
    cipherArray[0] = cipherArray[0].toUpperCase();
    console.log(cipherArray.join(''));
}

cipher('Genius without education is like silver in the mine')