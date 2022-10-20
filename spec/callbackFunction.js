const { someAsyncFunction } = require("../src/app");

describe("someAsyncFunction", () => {
    it('Sum of 10 and 21', (done) => {
        someAsyncFunction(10, 21, callback);
        function callback(a, b) {
            expect(a + b).toBe(31);
            done();
        }
    });
});