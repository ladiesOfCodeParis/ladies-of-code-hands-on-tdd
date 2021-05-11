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
        test('Simple case - Given 0, should return string vide ""', () => {
            // Arrange
            let input = 0;
            let expected = '';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
        test('Simple case - Given 5, should return V', () => {
            // Arrange
            let input = 5;
            let expected = 'V';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Simple case - Given 10, should return X', () => {
            // Arrange
            let input = 10;
            let expected = 'X';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Middle case - Given 2, should return II', () => {
            // Arrange
            let input = 2;
            let expected = 'II';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });


        test('Middle case - Given 3, should return III', () => {
            // Arrange
            let input = 3;
            let expected = 'III';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });

        test('Middle case - Given 4, should return IV', () => {
            // Arrange
            let input = 4;
            let expected = 'IV';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });


        test('Middle case - Given 6, should return VI', () => {
            // Arrange
            let input = 6;
            let expected = 'VI';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });


        test('Middle case - Given 7, should return VII', () => {
            // Arrange
            let input = 7;
            let expected = 'VII';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });


        test('Middle case - Given 8, should return VIII', () => {
            // Arrange
            let input = 8;
            let expected = 'VIII';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})
