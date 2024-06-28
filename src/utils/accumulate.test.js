import { deepEqual, throws } from 'node:assert';
import accumulate from './accumulate.js';

function add(a, b) {
  return a + b;
}

describe('accumulate', () => {
  it('should accumulate values', () => {
    deepEqual(accumulate([1, 2, 3], add), [1, 3, 6]);
  });

  it('should accumulate values with an initial value', () => {
    deepEqual(accumulate([1, 2, 3], add, 42), [42, 43, 45, 48]);
  });

  it('should yield only the initial value if the iterable is empty', () => {
    deepEqual(accumulate([], add, 42), [42]);
  });

  it('should throw if no value is provided', () => {
    throws(() => accumulate([], add));
  });
});
