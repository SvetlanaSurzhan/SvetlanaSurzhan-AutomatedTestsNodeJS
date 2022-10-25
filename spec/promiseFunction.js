const { someAsyncFunction } = require("../src/app");

describe("someAsyncFunction", () => {
    it('Sum of 5 and 10', (done) => {
        return someAsyncFunction(5, 10)
            .then((a, b) => {
                expect(a + b).toBe(15);
                done();
            });
    });
});