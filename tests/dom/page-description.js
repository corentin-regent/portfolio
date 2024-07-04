const pageDescriptions = new Set()

export default function testPageDescription({ route, dom }) {
  describe(`Page description for route ${route}`, () => {
    const pageDescription = dom.querySelector('meta[name=description]')?.getAttribute('content')
    it(`should exist`, () => {
      expect(pageDescription).toBeTruthy();
    })
    it(`should be unique`, () => {
      expect(pageDescriptions).not.toContain(pageDescription)
      pageDescriptions.add(pageDescription)
    })
  })
}
