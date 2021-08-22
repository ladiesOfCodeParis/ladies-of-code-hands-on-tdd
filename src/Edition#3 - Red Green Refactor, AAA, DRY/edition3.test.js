const toRomanNumerals = require('./edition3');

describe('Edition#3', () => {
    describe('Roman Numerals', () => {
        test('Given a value, should return the given value', () => {
            // Arrange
            let input = 0;
            let expected = 1;
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})
