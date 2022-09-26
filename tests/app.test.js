const fizzBuzz = require('../src/app')

function testFizzBuzz() {
    if (fizzBuzz(3) === 'fizz') {
        console.log('3 - Pass');
    } else {
        console.log('3 - Fail');
    }

    if (fizzBuzz(5) === 'buzz') {
        console.log('5 - Pass');
    } else {
        console.log('5 - Fail');
    }

    if (fizzBuzz(15) === 'fizzBuzz') {
        console.log('15 - Pass');
    } else {
        console.log('15 - Fail');
    }
    
    if (fizzBuzz(7) === 7) {
        console.log('7 - Pass');
    } else {
        console.log('7 - Fail');
    }
}

testFizzBuzz()