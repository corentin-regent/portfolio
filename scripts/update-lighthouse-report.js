import { readFileSync } from 'fs';
import puppeteer from 'puppeteer';

const manifestFilePath = process.argv[2];
let lighthouseReport = readFileSync('docs/lighthouse-report-template.html', { encoding: 'utf-8' });

// Due to the round stroke-linecap of the circles,
// they are filled when we specify more than 350 degrees.
const ROUNDED_END_ANGLE = 5;
const WHOLE_TURN_ANGLE = 360;

const summaries = JSON.parse(readFileSync(manifestFilePath, { encoding: 'utf-8' }))
  .filter(audit => audit.isRepresentativeRun)
  .map(audit => audit.summary);

const sumScores = summaries.reduce(
  (agg, incoming) =>
    Object.fromEntries(
      Object.entries(incoming).map(([category, incomingScore]) => [
        category,
        (agg[category] ?? 0) + incomingScore,
      ])
    ),
  {}
);

Object.entries(sumScores)
  .map(([category, sumScore]) => [category, sumScore / summaries.length])
  .forEach(([category, score]) => {
    const angle = (WHOLE_TURN_ANGLE - ROUNDED_END_ANGLE) * score - ROUNDED_END_ANGLE;
    const scorePercent = Math.round(score * 100);
    Object.entries({
      angle: angle > 0 ? angle : 0,
      result: scorePercent >= 90 ? 'pass' : scorePercent >= 50 ? 'average' : 'fail',
      score: scorePercent,
    }).forEach(
      ([item, value]) =>
        (lighthouseReport = lighthouseReport.replace(`%%${category}-${item}%%`, value))
    );
  });

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({
  width: 496,
  height: 94,
});
await page.setContent(lighthouseReport);
await page.screenshot({ path: 'docs/lighthouse-report.png' });
await browser.close();
