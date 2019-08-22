function factorNum(num) {
    factorArray = [];
    for (let i=0; i<=num; i++) {
        if (num%i === 0) {
            factorArray.push(i);
        } 
    }
    console.log(factorArray);
}

factorNum(6);
factorNum(7);
factorNum(9);
factorNum(120);