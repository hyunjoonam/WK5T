function tipAmount(bill, service) {
    if (service === 'good') {
        return bill*1.2
    } else if (service === 'fair') {
        return bill*1.15
    } else if (service === 'bad') {
        return bill*1.1
    }
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));
console.log(tipAmount(10, 'bad'));