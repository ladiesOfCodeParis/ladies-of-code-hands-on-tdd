const toRomanNumerals = require('./edition4');

describe('Edition#4', () => {
    describe('Roman Numerals', () => {
        test('Given value, should return value', () => {
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
