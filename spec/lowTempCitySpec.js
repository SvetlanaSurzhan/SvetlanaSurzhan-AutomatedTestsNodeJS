const { lowTempCityNames } = require("../src/app")
const { cityArray } = require("../src/app")

describe(lowTempCityNames, () => {
    it('returns Charlott, Bozman', () => {
        const actual = lowTempCityNames(cityArray, 50);
        const expected = 'Charlott, Bozman';
        expect(actual).toBe(expected);
    });
});

