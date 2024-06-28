import { strictEqual } from 'node:assert';
import classes from './classes.js';

describe('classes', () => {
  it('should combine CSS classes', () => {
    strictEqual(classes('a', 'b   c'), 'a b c');
  });

  it('should filter out falsy values', () => {
    strictEqual(classes('', 'a', null, 'b', undefined, 'c', false), 'a b c');
  });
});
