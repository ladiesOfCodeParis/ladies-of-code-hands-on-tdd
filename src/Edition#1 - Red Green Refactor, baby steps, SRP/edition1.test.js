const edition1 = require('./edition1');

describe('Edition#1', () => {
    describe('Kata', () => {
        test('Given a value, should return the given value', () => {
            expect(edition1(0)).toBe(1);
        });
    })
})
