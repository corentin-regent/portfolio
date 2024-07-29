import availableLanguages from 'src/config/language/available.js';
import defaultLanguage from 'src/config/language/default.js';
import { URL } from 'url';

/** @param {import('puppeteer').Page} page */
export default function testLanguageMetadata(page) {
  describe('language metadata', () => {
    it('should have the correct html lang attribute', async () => {
      const expectedLanguage = availableLanguages.find(lang => new URL(page.url()).pathname.startsWith(`/${lang}/`)) ?? defaultLanguage
      const htmlElement = await page.$('html')
      const htmlLanguage = await htmlElement.evaluate(element => element.getAttribute('lang'))
      expect(htmlLanguage).toEqual(expectedLanguage)
    });
  });
}
