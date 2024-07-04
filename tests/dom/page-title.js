const pageTitles = new Set()

export default function testPageTitle({ route, dom }) {
  describe(`Page title for route ${route}`, () => {
    const pageTitle = dom.querySelector('title')?.text
    it(`should exist`, () => {
      expect(pageTitle).toBeTruthy();
    })
    it(`should be unique`, () => {
      expect(pageTitles).not.toContain(pageTitle)
      pageTitles.add(pageTitle)
    })
  })
}
