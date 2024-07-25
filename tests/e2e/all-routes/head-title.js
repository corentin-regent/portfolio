const titles = new Set();

/** @param {import('puppeteer').Page} page */
export default function testPageTitle(page) {
  describe('head title', () => {
    let title;

    beforeAll(async () => {
      const titleElement = await page.$('title');
      title = await titleElement.evaluate(element => element.textContent);
    });

    it('should exist', () => {
      expect(title).toBeTruthy();
    });

    it('should be unique', () => {
      expect(titles).not.toContain(title);
      titles.add(title);
    });
  });
}
