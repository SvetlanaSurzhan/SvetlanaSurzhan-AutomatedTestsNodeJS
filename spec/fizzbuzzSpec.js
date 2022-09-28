const fizzBuzz = require("../src/app")

describe("fizzBuzz", () => {
    describe("positive tests", () => {
        let someVarThatIneedToChangeBeforeEveryTest

        beforeAll(() => {
            someVarThatIneedToChangeBeforeEveryTest = 0
            console.log('==================== BEFORE ALL ================', someVarThatIneedToChangeBeforeEveryTest)
        })

        beforeEach(() => {
            someVarThatIneedToChangeBeforeEveryTest = 0
            console.log('==================== BEFORE EACH ================', someVarThatIneedToChangeBeforeEveryTest)

        })

        afterAll(() => {
            console.log('==================== AFTER ALL ================', someVarThatIneedToChangeBeforeEveryTest)
        })

        it( "returns fizz", () => {
            var actual = fizzBuzz(3);
            someVarThatIneedToChangeBeforeEveryTest = 1 + someVarThatIneedToChangeBeforeEveryTest
            console.log(someVarThatIneedToChangeBeforeEveryTest)
            expect(actual).toBe("fizz")
        });
        it( "returns buzz", () => {
            var actual = fizzBuzz(5);
            someVarThatIneedToChangeBeforeEveryTest = 2 + someVarThatIneedToChangeBeforeEveryTest
            console.log(someVarThatIneedToChangeBeforeEveryTest)
            expect(actual).toBe("buzz")
        });
        it( "returns fizzBuzz", () => {
            var actual = fizzBuzz(15);
            someVarThatIneedToChangeBeforeEveryTest = 3 + someVarThatIneedToChangeBeforeEveryTest
            console.log(someVarThatIneedToChangeBeforeEveryTest)
            expect(actual).toBe("fizzBuzz")
        }); 
        it( "returns 7", () => {
            var actual = fizzBuzz(7);
            someVarThatIneedToChangeBeforeEveryTest = 4 + someVarThatIneedToChangeBeforeEveryTest
            console.log(someVarThatIneedToChangeBeforeEveryTest)
            expect(actual).toBe(17)
        });
    })
})