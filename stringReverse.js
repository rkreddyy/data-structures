function stringReverse(input) {
    // let reversedString = '';
    // for (let char of input) {
    //     reversedString = char + reversedString;
    // }
    // return reversedString;

    return input.split('').reduce((accumilator, char) => char + accumilator, '');
}

console.log(`Reverse of 'hello' is: ${stringReverse("hello")}`);