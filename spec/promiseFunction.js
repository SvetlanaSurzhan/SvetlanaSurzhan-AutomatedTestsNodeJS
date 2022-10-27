const { someAsyncFunction } = require("../src/app");

describe("someAsyncFunction", () => {
    it('Sum of 5 and 10', () => {
        const promise = someAsyncFunction(5, 10);
        return promise.then((data) => {
            expect(data.num1 + data.num2).toBe(15);
        });
    });
    it('Async', async () => {
        const data = await someAsyncFunction(5, 10);
        expect(data.num1 + data.num2).toBe(15);
    });
});