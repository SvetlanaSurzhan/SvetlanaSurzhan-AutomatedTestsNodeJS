const { lowTempCityNames } = require("../src/app")
// Valid Boundary Conditions : 49, 50
// Invalid Boundary Conditions : 51
const cityArray = [
    {
        "name": "Louisville",
        "temperature": 49,
    },
    {
        "name": "New-York",
        "temperature": 50,
    },
    {
        "name": "Charlott",
        "temperature": 51,
    }
];

describe(lowTempCityNames, () => {
    it('returns Louisville, New-York', () => {
        const actual = lowTempCityNames(cityArray, 50);
        const expected = 'Louisville, New-York';
        expect(actual).toBe(expected);
    });
});



