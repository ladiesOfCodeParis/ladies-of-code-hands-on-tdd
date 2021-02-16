const {fizzbuzz, fizzbuzz_output} = require('./edition1');

describe('Edition#1', () => {
    describe('FizzBuzz - Simple case', () => {
        test('Given one, it should return one', () => {
            expect(fizzbuzz(1)).toBe(1);
        });
        test('Given two, it should return two', () => {
            expect(fizzbuzz(2)).toBe(2);
        });
        test('Given three, it should return Fizz', () => {
            expect(fizzbuzz(3)).toBe('Fizz');
        });
        test('Given six, it should return Fizz', () => {
            expect(fizzbuzz(6)).toBe('Fizz');
        });
        test('Given nine, it should return Fizz', () => {
            expect(fizzbuzz(9)).toBe('Fizz');
        });
        test('Given five, it should return Buzz', () => {
            expect(fizzbuzz(5)).toBe('Buzz');
        });
        test('Given ten, it should return Buzz', () => {
            expect(fizzbuzz(10)).toBe('Buzz');
        });
        test('Given twenty, it should return Buzz', () => {
            expect(fizzbuzz(20)).toBe('Buzz');
        });
        test('Given fifteen, it should return FizzBuzz', () => {
            expect(fizzbuzz(15)).toBe('FizzBuzz');
        });
        test('Given thirty, it should return FizzBuzz', () => {
            expect(fizzbuzz(30)).toBe('FizzBuzz');
        });
        test('Given forty-five, it should return FizzBuzz', () => {
            expect(fizzbuzz(45)).toBe('FizzBuzz');
        });
    })

    describe('FizzBuzz - Output', () => {
        test('Test output from 1 to 20', () => {
            expect(fizzbuzz_output(20)).toStrictEqual([
                1,
                2,
                'Fizz',
                4,
                'Buzz',
                'Fizz',
                7,
                8,
                'Fizz',
                'Buzz',
                11,
                'Fizz',
                13,
                14,
                'FizzBuzz',
                16,
                17,
                'Fizz',
                19,
                'Buzz'
            ]);
        });
    })
})
