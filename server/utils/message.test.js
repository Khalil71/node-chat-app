var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message')
describe('generateMessage', () => {
  it('should generate the correct message obj', () => {
    var from = 'kay';
    var text = 'where are we now';
    var x = generateMessage(from, text);
    expect(x).toInclude({from, text});
    expect(x.createdAt).toBeA('number');
  });
});

describe('generate location message', () => {
  it('should generate correct location object', () => {
    var from = 'woo';
    var lat = 5;
    var lon = 6;
    var x = generateLocationMessage(from, lat, lon);
    expect(x.createdAt).toBeA('number');
    expect(x).toInclude({from});
    expect(x.url).toBe(`https://www.google.com/maps?q=5,6`);
    expect(x.from).toBe('woo');
  });
});
