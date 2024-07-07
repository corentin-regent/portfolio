import mapValues from './mapValues.js';

describe('mapValues', () => {
  it("should map the object's values using the provided function", () => {
    const obj = { 1: 1, 2: 2 };
    const expected = { 1: 2, 2: 4 };
    expect(mapValues(obj, ({ key, value }) => +key + value)).toEqual(expected);
  });
});
