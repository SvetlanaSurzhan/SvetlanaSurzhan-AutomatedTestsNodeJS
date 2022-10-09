function fizzBuzz(number) {
    if (((number % 3) === 0 && (number % 5)) === 0) {
        return ('fizzBuzz');
    }
    else if ((number % 5) === 0) {
        return ('buzz');
    }
    else if ((number % 3) === 0) {
        return ('fizz');
    }
    else {
        return number;
    }
}

const cityArray = [
    {
        "name": "Louisville",
        "temperature": 74,
    },
    {
        "name": "New-York",
        "temperature": 56
    },
    {
        "name": "Charlott",
        "temperature": 45
    },
    {
        "name": "Las-Vegas",
        "temperature": 80
    },
    {
        "name": "Los-Angeles",
        "temperature": 100
    },
    {
        "name": "Boston",
        "temperature": 74
    },
    {
        "name": "Bozman",
        "temperature": 32
    }
];

// function lowTempCityNames(array, temp) {
//     return array.filter((city) => {
//         return city.temperature <= temp
//     }).map((city) => {
//         return city.name
//     }).join(', ')
// };

function lowTempCityNames(array, temp) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray.filter((city) => {
        return city.temperature <= temp
    }).map((city) => {
        return city.name
    }).join(', ')
}
console.log(lowTempCityNames(cityArray, 50));
module.exports = { lowTempCityNames };