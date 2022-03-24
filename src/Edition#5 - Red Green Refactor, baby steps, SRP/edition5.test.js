const fromRomanNumerals = require('./edition5');

describe('Edition#5', () => {
    describe('Roman Numerals: from roman numerals', () => {
        test('Given value, should return value', () => {
            // Arrange
            let input = 0;
            let expected = 1;
            // Act
            let actual = fromRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})
