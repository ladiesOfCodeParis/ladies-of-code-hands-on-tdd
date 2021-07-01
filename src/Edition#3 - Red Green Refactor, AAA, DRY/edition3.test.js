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
        test('Given 3, should return III', () => {
            // Arrange
            let input = 3;
            let expected = 'III';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
        test('Given 5, should return V', () => {
            // Arrange
            let input = 5;
            let expected = 'V';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
        test('Given 10, should return X', () => {
            // Arrange
            let input = 10;
            let expected = 'X';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
        test('Given 50, should return L', () => {
            // Arrange
            let input = 50;
            let expected = 'L';
            // Act
            let actual = toRomanNumerals(input);
            // Assert
            expect(actual).toBe(expected);
        });
    })
})