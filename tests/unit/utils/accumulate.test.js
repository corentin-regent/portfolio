import accumulate from 'src/utils/accumulate.js';
import { describe, expect, it } from 'vitest';

describe('accumulate', () => {
  it('should accumulate values', () => {
    expect(accumulate([1, 2, 3], (a, b) => a + b)).toEqual([1, 3, 6]);
  });
});
