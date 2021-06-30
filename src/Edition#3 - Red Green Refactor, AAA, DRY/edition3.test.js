const toRomanNumerals = require('./edition3');

describe('Edition#3', () => {
    describe('Roman Numerals', () => {
        test('Given 0, should return empty string', () => {
            // Arrange
            let input = 0;
            let expected = '';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Given 1, should return I', () => {
            // Arrange
            let input = 1;
            let expected = 'I';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Given 2, should return II', () => {
            // Arrange
            let input = 2;
            let expected = 'II';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Given , should return ', () => {
            // Arrange
            let input = 3;
            let expected = 'III';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})
