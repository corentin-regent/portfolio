import capitalize from 'src/utils/capitalize.js';

describe('capitalize', () => {
  it('should make the first letter of a word uppercase', () => {
    expect(capitalize('test')).toEqual('Test');
  });

  it('should capitalize all words in a string', () => {
    expect(capitalize('This is my Text!')).toEqual('This Is My Text!');
  });
});
