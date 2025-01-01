import mapItems from 'src/utils/mapItems.js';
import { describe, expect, it } from 'vitest';

describe('mapItems', () => {
  it("should map the object's items using the provided functions", () => {
    const obj = { 1: 1, 2: 2 };
    const mapKey = ({ key, value }) => +key + value;
    const mapValue = ({ key, value }) => +key - value;
    const expected = { 2: 0, 4: 0 };
    expect(mapItems(obj, { mapKey, mapValue })).toEqual(expected);
  });

  it('should preserve items if no map functions are provided', () => {
    const obj = {
      a: 1,
      2: 'b',
    };
    expect(mapItems(obj, {})).toEqual(obj);
  });
});
