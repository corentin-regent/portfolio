const descriptions = new Set();

/** @param {import('puppeteer').Page} page */
export default function testPageDescription(page) {
  describe('head description', () => {
    let description;

    beforeAll(async () => {
      const descriptionElement = await page.$('meta[name=description]');
      description = await descriptionElement.evaluate(element => element.getAttribute('content'));
    });

    it('should exist', () => {
      expect(description).toBeTruthy();
    });

    it('should be unique', () => {
      expect(descriptions).not.toContain(description);
      descriptions.add(description);
    });
  });
}
