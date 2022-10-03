// function fizzBuzz(number) {
//     if (((number % 3) === 0 && (number % 5)) === 0){
//         return('fizzBuzz');
//     }
//     else if ((number % 5) === 0){
//         return('buzz');
//     }
//     else if((number % 3) === 0){
//         return('fizz');
//     }
//     else{
//         return number;
//     } 
// }

// function sumOfnumbers(a,b) {
//     return a + b
// }
// console.log(sumOfnumbers(2,5));

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

function filteredCityNames(array){
    return array.filter((city) =>{
        return city.temperature <= 50 
    }).map((city)=>{
        return city.name
     }).join()
};   
console.log(filteredCityNames(cityArray));

