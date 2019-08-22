function tipAmount(bill, service, split) {
    if (service === 'good') {
        return '$' + (bill*1.2)/split
    } else if (service === 'fair') {
        return '$' + (bill*1.15)/split
    } else if (service === 'bad') {
        return '$' + (bill*1.1)/split
    }
}
console.log(tipAmount(100, 'good', 5));
console.log(tipAmount(40, 'fair', 2));
console.log(tipAmount(10, 'bad', 4));