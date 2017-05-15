var expect = require('expect');
var {generateMessage} = require('./message')
describe('generateMessage', () => {
  it('should generate the correct message obj', () => {
    var from = 'kay';
    var text = 'where are we now';
    var x = generateMessage(from, text);
    expect(x).toInclude({from, text});
    expect(x.createdAt).toBeA('number');
  });
});
