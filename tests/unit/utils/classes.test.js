import classes from 'src/utils/classes.js';
import { describe, expect, it } from 'vitest';

describe('classes', () => {
  it('should combine CSS classes', () => {
    expect(classes('a', 'b   c')).toEqual('a b c');
  });

  it('should filter out falsy values', () => {
    expect(classes('', 'a', null, 'b', undefined, 'c', false)).toEqual('a b c');
  });
});
