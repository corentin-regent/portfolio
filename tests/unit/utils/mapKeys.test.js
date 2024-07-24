import mapKeys from 'src/utils/mapKeys.js';

describe('mapKeys', () => {
  it("should map the object's keys using the provided function", () => {
    const obj = { 1: 1, 2: 2 };
    const expected = { 2: 1, 4: 2 };
    expect(mapKeys(obj, ({ key, value }) => +key + value)).toEqual(expected);
  });
});
