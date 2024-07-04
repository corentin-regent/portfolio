import withTrailingSlash from './withTrailingSlash.js';

describe('withTrailingSlash', () => {
  it('should add a trailing slash if not present', () => {
    expect(withTrailingSlash('/without')).toEqual('/without/');
  });

  it('should not add a trailing slash if already present', () => {
    expect(withTrailingSlash('/with/')).toEqual('/with/');
  });
});
