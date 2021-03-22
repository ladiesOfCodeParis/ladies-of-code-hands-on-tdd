const stringCalculator = require('./edition2');

describe('Edition#2', () => {
    describe('String Calculator', () => {
        test('Given a value, should return the given value', () => {
            expect(stringCalculator(0)).toBe(1);
        });
    })
})
