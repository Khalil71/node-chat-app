const expect = require('expect');
const {isRealString} = require('./validation');

describe('Is a Real String', () => {
  it('should reject non string values', () => {
    var x = 16548;
    expect(isRealString(x)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var x = '      ';
    expect(isRealString(x)).toBe(false);
  });

  it('should allow strings with non space chars', () => {
    var x = 'mido';
    expect(isRealString(x)).toBe(true);
  });
});
