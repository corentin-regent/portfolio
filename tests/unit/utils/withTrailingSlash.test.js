import withTrailingSlash from 'src/utils/withTrailingSlash.js';

describe('withTrailingSlash', () => {
  it('should add a trailing slash if absent', () => {
    expect(withTrailingSlash('/absent')).toEqual('/absent/');
  });

  it('should not add a trailing slash if already present', () => {
    expect(withTrailingSlash('/present/')).toEqual('/present/');
  });
});
