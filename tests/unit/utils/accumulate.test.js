import accumulate from 'src/utils/accumulate.js';
import { describe, expect, it } from 'vitest';

function add(a, b) {
  return a + b;
}

describe('accumulate', () => {
  it('should accumulate values', () => {
    expect(accumulate([1, 2, 3], add)).toEqual([1, 3, 6]);
  });

  it('should accumulate values with an initial value', () => {
    expect(accumulate([1, 2, 3], add, 42)).toEqual([42, 43, 45, 48]);
  });

  it('should yield only the initial value if the iterable is empty', () => {
    expect(accumulate([], add, 42)).toEqual([42]);
  });

  it('should throw if no value is provided', () => {
    expect(() => accumulate([], add)).toThrow();
  });
});
