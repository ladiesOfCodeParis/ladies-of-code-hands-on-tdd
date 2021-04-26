const toRomanNumerals = require('./edition3');

describe('Edition#3', () => {
    describe('Roman Numerals', () => {
        test('Simple case - Given 1, should return I', () => {
            // Arrange
            let input = 1;
            let expected = 'I';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})
