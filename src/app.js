// // Fizz Buzz task:
// function fizzBuzz(number) {
//     if (((number % 3) === 0 && (number % 5)) === 0) {
//         return ('fizzBuzz');
//     }
//     else if ((number % 5) === 0) {
//         return ('buzz');
//     }
//     else if ((number % 3) === 0) {
//         return ('fizz');
//     }
//     else {
//         return number;
//     }
// }

// const cityArray = [
//     {
//         "name": "Louisville",
//         "temperature": 74,
//     },
//     {
//         "name": "New-York",
//         "temperature": 56
//     },
//     {
//         "name": "Charlott",
//         "temperature": 45
//     },
//     {
//         "name": "Las-Vegas",
//         "temperature": 80
//     },
//     {
//         "name": "Los-Angeles",
//         "temperature": 100
//     },
//     {
//         "name": "Boston",
//         "temperature": 74
//     },
//     {
//         "name": "Bozman",
//         "temperature": 32
//     }
// ];
// // Filter Erray with for loop:

// // function lowTempCityNames(array, temp) {
// //     return array.filter((city) => {
// //         return city.temperature <= temp
// //     }).map((city) => {
// //         return city.name
// //     }).join(', ')
// // };

// function lowTempCityNames(array, temp) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i]);
//     }
//     return newArray.filter((city) => {
//         return city.temperature <= temp
//     }).map((city) => {
//         return city.name
//     }).join(', ')
// }
// console.log(lowTempCityNames(cityArray, 50));
// module.exports = { lowTempCityNames };

// // Async callback function:
// // function sum(a, b) {
// //     return (a + b);
// // }
// //cb(a: number, b: number): a = 10, b = 21
// function someAsyncFunction(a, b, cb) {
//     console.log("FIRED API REQUEST AND IT WILL GO FOR 5 sec");
//     setTimeout(() => {
//         console.log("RECEIVED DATA a and b");
//         return cb(a, b);
//     }, 2000);
// };
// // someAsyncFunction(10, 21, sum => {
// //     console.log(sum);
// // });
// module.exports = { someAsyncFunction };

// function someOtherFunction(callBack) {
//     return callBack();
// }
// function someFunction(somecb) {
//     return somecb(arguments[1], arguments[2]);
// }

// function cb(a, b) {
//     return a - b;
// }

// const result = someFunction(cb, 11, 2);
// console.log(result);

// Promeses:

function someAsyncFunction(a, b) {
    return new Promise((res, rej) => {
        console.log("FIRED API REQUEST AND IT WILL GO FOR 5 sec");
        setTimeout(() => {
            console.log("RECEIVED DATA a and b");
            res({
                num1: a,
                num2: b
            });
        }, 2000);
    });
};


// const result = someAsyncFunction(4, 6);
// console.log(result);
module.exports = { someAsyncFunction };

// someAsyncFunction(1, 2).then((data) => console.log("1 =========", data))
// someAsyncFunction(3, 4).then((data) => console.log("2 =========", data))
