import { jest } from '@jest/globals';

const themeInputId = 'theme-selector';

/** @param {import('puppeteer').Page} page */
export default function testThemeSelection(page) {
  describe('theme selection', () => {
    jest.retryTimes(3, { logErrorsBeforeRetry: true });

    ['light', 'dark'].forEach(theme => {
      describe(`with ${theme} theme as default`, () => {
        let mainDivElement;

        /** @type {import('puppeteer').ElementHandle<HTMLLabelElement>} */
        let defaultThemeEnabledLabelElement;

        /** @type {import('puppeteer').ElementHandle<HTMLLabelElement>} */
        let otherThemeEnabledLabelElement;

        beforeEach(async () => {
          await page.evaluate(() => window.localStorage.clear());
          await page.reload();

          [, defaultThemeEnabledLabelElement, otherThemeEnabledLabelElement, mainDivElement] =
            await Promise.all([
              page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }]),
              page.$(`label[for=${themeInputId}].${theme}-only`),
              page.$(`label[for=${themeInputId}]:not(.${theme}-only)`),
              page.$('body > div.contents > div'),
            ]);

          expect(
            await mainDivElement.evaluate(element => {
              const mainDivChildren = [...element.children];
              return ['header', 'main', 'footer'].every(nodeName =>
                mainDivChildren.some(child => child.nodeName.toLowerCase() === nodeName)
              );
            })
          ).toBeTruthy();
        });

        async function expectDefaultThemeEnabled() {
          await Promise.all([
            expectThemeLabelVisible(defaultThemeEnabledLabelElement),
            expectThemeLabelInvisible(otherThemeEnabledLabelElement),
            expectBgColorMatches(mainDivElement, theme),
          ]);
        }

        async function expectOtherThemeEnabled() {
          await Promise.all([
            expectThemeLabelVisible(otherThemeEnabledLabelElement),
            expectThemeLabelInvisible(defaultThemeEnabledLabelElement),
            expectBgColorMatches(mainDivElement, theme === 'dark' ? 'light' : 'dark'),
          ]);
        }

        it("should have the browser's default theme enabled by default", async () => {
          await expectDefaultThemeEnabled();
        });

        it('should toggle the theme when the icon is clicked', async () => {
          await defaultThemeEnabledLabelElement.evaluate(element => element.click());
          await expectOtherThemeEnabled();
        });

        it('should switch the theme back to default when toggled twice', async () => {
          await defaultThemeEnabledLabelElement.evaluate(element => element.click());
          await otherThemeEnabledLabelElement.evaluate(element => element.click());
          await expectDefaultThemeEnabled();
        });
      });
    });
  });
}

/** @param {import('puppeteer').ElementHandle<HTMLLabelElement>} labelElement */
async function expectThemeLabelVisible(labelElement) {
  const iconChildElement = await labelElement.$('svg');
  expect(await iconChildElement.isVisible()).toBeTruthy();

  const [labelBoundingBox, iconBoundingBox] = await Promise.all([
    labelElement.boundingBox(),
    iconChildElement.boundingBox(),
  ]);
  expect(iconBoundingBox).toEqual(labelBoundingBox);
}

/** @param {import('puppeteer').ElementHandle<HTMLLabelElement>} labelElement */
async function expectThemeLabelInvisible(labelElement) {
  return expect(await labelElement.isVisible()).toBeFalsy();
}

/** @param {import('puppeteer').ElementHandle<HTMLDivElement>} mainDivElement */
async function expectBgColorMatches(mainDivElement, theme) {
  const expectedBgColor = theme === 'dark' ? 'rgb(18, 18, 18)' : 'rgb(255, 255, 255)';
  const actualBgColor = await mainDivElement.evaluate(element =>
    window.getComputedStyle(element).getPropertyValue('background-color')
  );
  return expect(actualBgColor).toEqual(expectedBgColor);
}
