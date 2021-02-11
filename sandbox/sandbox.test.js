const sandbox = require('./sandbox');

describe('Sandbox', () => {
    test('Given a value, should return the given value', () => {
        expect(sandbox(0)).toBe(1);
    });
})
