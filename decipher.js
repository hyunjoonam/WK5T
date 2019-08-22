// Write a function decipher which is given a string, an offset, and returns the original message.

// > decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')
// 'Genius without education is like silver in the mine'

let cipheredString = 'abcdefghijklmnopqrstuvwxyz';
let cipheredArray = cipheredString.split('');
let decipheredArray = cipheredArray.splice(13).concat(cipheredArray.splice(0, 13));

function decipher(sentence) {
    sentence = sentence.toLowerCase();
    let sentenceArrayed = sentence.split('');
    let array = [];
    for (let i=0; i<sentenceArrayed.length; i++) {
        if (sentenceArrayed[i] === ' '){
            array.push(' ')
        } 
        for (let j=0; j<decipheredArray.length; j++) {
            if (sentenceArrayed[i] === decipheredArray[j]) {
                let arrayedString = cipheredString.split('')
                let indexNum = decipheredArray.indexOf(decipheredArray[j]);
                array.push(arrayedString[indexNum]);            
            } 
        }
    }
    array[0] = array[0].toUpperCase();
    console.log(array.join(''))
}

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar')