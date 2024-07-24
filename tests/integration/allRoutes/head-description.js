const descriptions = new Set();

export default function testPageDescription({ page, route }) {
  describe(`Head description for route ${route}`, () => {
    let description;

    beforeAll(async () => {
      await page.goto(ROOT_URL + route);
      const descriptionElement = await page.$('meta[name=description]');
      description = await descriptionElement.evaluate(element => element.getAttribute('content'));
    });

    it(`should exist`, () => {
      expect(description).toBeTruthy();
    });

    it(`should be unique`, () => {
      expect(descriptions).not.toContain(description);
      descriptions.add(description);
    });
  });
}
