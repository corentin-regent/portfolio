const themeInputId = 'theme-selector';

/** @param {import('puppeteer').Page} page */
export default function testThemeSelection(page) {
  describe('theme selection', () => {
    ['light', 'dark'].forEach(theme => {
      describe(`with ${theme} theme as default`, () => {

        /** @type {import('puppeteer').ElementHandle<HTMLLabelElement>} */
        let defaultThemeEnabledLabelElement;

        /** @type {import('puppeteer').ElementHandle<HTMLLabelElement>} */
        let otherThemeEnabledLabelElement;

        let mainDivElement;

        beforeAll(async () => {
          [, defaultThemeEnabledLabelElement, otherThemeEnabledLabelElement, mainDivElement] = await Promise.all([
            page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }]),
            page.$(`label[for=${themeInputId}].${theme}-only`),
            page.$(`label[for=${themeInputId}]:not(.${theme}-only)`),
            page.$('body > div.contents > div'),
          ]);
        });

        async function isDefaultThemeEnabled() {
          return await Promise.all([
            isThemeLabelVisible(defaultThemeEnabledLabelElement),
            isThemeLabelInvisible(otherThemeEnabledLabelElement),
            doesBgColorMatch(mainDivElement, theme)
          ]);
        }

        it("should have the browser's default theme enabled by default", async () => {
          expect(await isDefaultThemeEnabled()).toBeTruthy()
        });
      });
    });
  });
}

/** @param {import('puppeteer').ElementHandle<HTMLLabelElement>} labelElement */
async function isThemeLabelVisible(labelElement) {
  const iconChildElement = await labelElement.$('svg');
  if (!await iconChildElement.isVisible()) return false;

  const [labelBoundingBox, iconBoundingBox] = await Promise.all([labelElement.boundingBox(), iconChildElement.boundingBox()]);
  return labelBoundingBox.width === iconBoundingBox.width
    && labelBoundingBox.height === iconBoundingBox.height
    && labelBoundingBox.x === iconBoundingBox.x
    && labelBoundingBox.y === iconBoundingBox.y
}

/** @param {import('puppeteer').ElementHandle<HTMLLabelElement>} labelElement */
async function isThemeLabelInvisible(labelElement) {
  return !await labelElement.isVisible()
}

/** @param {import('puppeteer').ElementHandle<HTMLDivElement>} mainDivElement */
async function doesBgColorMatch(mainDivElement, theme) {
  const expectedBgColor = theme === 'dark' ? 'rgb(9, 9, 11)' : 'rgb(250, 250, 250)';
  const actualBgColor = await mainDivElement.evaluate(element => window.getComputedStyle(element).getPropertyValue('background-color'));
  return actualBgColor === expectedBgColor;
}
