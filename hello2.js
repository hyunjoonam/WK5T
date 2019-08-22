function hello(name) {
    if (name === undefined) {
        console.log('Hello, world!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}
hello('Mustache')
hello();