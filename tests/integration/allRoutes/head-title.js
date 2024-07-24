const titles = new Set();

export default function testPageTitle({ page, route }) {
  describe(`Head title for route ${route}`, () => {
    let title;

    beforeAll(async () => {
      await page.goto(ROOT_URL + route);
      const titleElement = await page.$('title');
      title = await titleElement.evaluate(element => element.textContent);
    });

    it(`should exist`, () => {
      expect(title).toBeTruthy();
    });

    it(`should be unique`, () => {
      expect(titles).not.toContain(title);
      titles.add(title);
    });
  });
}
