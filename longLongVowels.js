// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longLongVowels(word) {
    let array = word.split('')
        for (i=0; array.length>i; i++) {
            if ( (array[i] === array[i+1]) && (array[i] === 'e' ||  array[i] === 'o' ||  array[i] === 'i'|| array[i] === 'u' || array[i] === 'a') ){
                let vowel = array[i];
                array.splice(i, 0, vowel, vowel, vowel);
                break;
            } 
            
        }
    console.log(array.join(''));
}

longLongVowels('Good')
longLongVowels('Cheese')
longLongVowels('Man')
longLongVowels('rmmoo')