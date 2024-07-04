import classes from './classes.js';

describe('classes', () => {
  it('should combine CSS classes', () => {
    expect(classes('a', 'b   c')).toEqual('a b c');
  });

  it('should filter out falsy values', () => {
    expect(classes('', 'a', null, 'b', undefined, 'c', false)).toEqual('a b c');
  });
});
