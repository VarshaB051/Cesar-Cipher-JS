const caesarShift = require('./caesar');

test('should return encrypted test with right shift when direction passed is "right"', () => {
    expect(caesarShift('abc', 'right', 1)).toBe('bcd');
});

test('should return encrypted test with right shift when direction passed is invalid', () => {
    expect(caesarShift('abc', 'any', 1)).toBe('bcd');
});

test('should return encrypted test with left shift when direction passed is "left"', () => {
    expect(caesarShift('abc', 'left', 1)).toBe('zab');
});

test('should return encrypted test with right shift when direction passed is "right" for uppercase letters', () => {
    expect(caesarShift('ABC', 'right', 1)).toBe('BCD');
});

test('should return encrypted test with right shift when direction passed is invalid for uppercase letters', () => {
    expect(caesarShift('ABC', 'any', 1)).toBe('BCD');
});

test('should return encrypted test with left shift when direction passed is "left" for uppercase letters', () => {
    expect(caesarShift('ABC', 'left', 1)).toBe('ZAB');
});
