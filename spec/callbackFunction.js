const { someAsyncFunction } = require("../src/app");

describe(someAsyncFunction, () => {
    it('Sum of 5 and 8', () => {
        const actual = someAsyncFunction(5, 8, (a, b) => {
            console.log(a + b);
        });
        const expected = 13;
        expect(actual).toBe(expected);
    });
});