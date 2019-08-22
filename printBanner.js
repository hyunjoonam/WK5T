function printBanner(text) {
    let height = 3;
    for (let i=0; i<height; i++) {
        let width = text.length+4;
        let textString = '';
        for (let j=0; j<width; j++) {
            if (i === 0 || i === height-1) {
                textString += '*';
            } 
            else {
                textString = '* ' + text + ' *';
            }
        }
        console.log(textString)
    }
    
}

printBanner('Hi Hello')
printBanner('Welcome to Javascript101')