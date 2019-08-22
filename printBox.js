function printBox(width, length) {
    for (let i=0; i<length; i++) {
        let square = [];
        let space = [];
        for (let j=0; j<width; j++) {
            if (i === 0 || i === length-1) {
                square.push('*');
            } else {
                space.push(' ');
                square = space;
                square.splice(square[0], 1, '*');  
            }   
        }
        square.pop();
        square.push('*');
        console.log(square.join(''));
    }
}
printBox(6,4);
printBox(9,13);