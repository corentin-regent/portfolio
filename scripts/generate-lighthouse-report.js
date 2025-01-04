import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import mapValues from '../src/utils/mapValues.js';

const CIRCLE_RADIUS = 42;
const CIRCLE_OPACITY = 0.1;

const BORDER_WIDTH = CIRCLE_RADIUS / 7;
const SCORE_SIZE = CIRCLE_RADIUS / 1.5;
const LABEL_SIZE = CIRCLE_RADIUS / 2.5;

const CIRCLE_SPACING = CIRCLE_RADIUS;
const BORDER_X = CIRCLE_SPACING;
const BORDER_Y = CIRCLE_SPACING / 10;
const LABEL_MARGIN = CIRCLE_SPACING / 4;

const SCORE_FONT_FAMILY =
  'Roboto Mono, Menlo, dejavu sans mono, Consolas, Lucida Console, monospace';
const LABEL_FONT_FAMILY = 'Roboto, Helvetica, Arial, sans-serif';

const COLOR_OK = '#0c6';
const COLOR_WARN = '#fa3';
const COLOR_ERROR = '#f33';

const metrics = [
  ['performance', 'Performance'],
  ['accessibility', 'Accessibility'],
  ['best-practices', 'Best Practices'],
  ['seo', 'SEO'],
];

function extractScores(manifest) {
  const summaries = manifest.filter(audit => audit.isRepresentativeRun).map(audit => audit.summary);
  const sumScores = summaries.reduce(
    (agg, incoming) =>
      mapValues(
        incoming,
        ({ key: category, value: incomingScore }) => (agg[category] ?? 0) + incomingScore
      ),
    {}
  );
  return mapValues(sumScores, sumScore => sumScore / summaries.length);
}

function mkSvgReport(scores) {
  const labelY = BORDER_Y + 2 * CIRCLE_RADIUS + LABEL_MARGIN;
  const arcRadius = CIRCLE_RADIUS - BORDER_WIDTH / 2;
  const svgWidth =
    2 * BORDER_X + 2 * CIRCLE_RADIUS * metrics.length + CIRCLE_SPACING * (metrics.length - 1);
  const svgHeight = labelY + LABEL_SIZE + BORDER_Y;

  const svgHead = `<svg
    width="${svgWidth}"
    height="${svgHeight}"
    viewBox="0 0 ${svgWidth} ${svgHeight}"
    xmlns="http://www.w3.org/2000/svg"
  >`;
  const svgTail = '</svg>';

  const results = metrics.map(([metric, label], index) => {
    const score = Math.round(scores[metric] * 100);
    const color = score >= 90 ? COLOR_OK : score >= 50 ? COLOR_WARN : COLOR_ERROR;

    const centerX = BORDER_X + CIRCLE_RADIUS * (2 * index + 1) + CIRCLE_SPACING * index;
    const centerY = BORDER_Y + CIRCLE_RADIUS;

    const startAngle = -Math.PI / 2;
    const endAngle = (score / 100) * 2 * Math.PI - Math.PI / 2;

    const circle = `<circle
      cx="${centerX}"
      cy="${centerY}"
      r="${CIRCLE_RADIUS}"
      fill="${color}"
      fill-opacity="${CIRCLE_OPACITY}"
    />`;

    const border =
      score === 100
        ? `<circle
          cx="${centerX}"
          cy="${centerY}"
          r="${arcRadius}"
          stroke="${color}"
          stroke-width="${BORDER_WIDTH}"
          fill="none"
        />`
        : `<path
          d="${mkArcPath(centerX, centerY, arcRadius, startAngle, endAngle)}"
          stroke="${color}"
          stroke-width="${BORDER_WIDTH}"
          fill="none"
          stroke-linecap="round"
        />`;

    const scoreText = `<text 
      x="${centerX}" 
      y="${centerY}" 
      font-size="${SCORE_SIZE}" 
      font-family="${SCORE_FONT_FAMILY}" 
      fill="${color}" 
      text-anchor="middle" 
      dominant-baseline="middle"
    >
      ${Math.round(score)}
    </text>`;

    const labelText = `<text 
      x="${centerX}" 
      y="${labelY}" 
      font-size="${LABEL_SIZE}" 
      font-family="${LABEL_FONT_FAMILY}" 
      fill="${color}" 
      text-anchor="middle"
      dominant-baseline="hanging"
    >
      ${label}
    </text>`;

    return circle + border + scoreText + labelText;
  });

  return [svgHead, ...results, svgTail].join('').replace(/\s+/g, ' ');
}

function mkArcPath(centerX, centerY, radius, startAngle, endAngle) {
  const start = pointOnArc(centerX, centerY, radius, endAngle);
  const end = pointOnArc(centerX, centerY, radius, startAngle);
  const isLongerThanHalfCircle = endAngle - startAngle <= Math.PI ? 0 : 1;
  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    isLongerThanHalfCircle,
    0,
    end.x,
    end.y,
  ].join(' ');
}

function pointOnArc(centerX, centerY, radius, angle) {
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

if (import.meta.url.endsWith(process.argv[1])) {
  const manifestFilePath = process.argv[2];
  const manifest = JSON.parse(readFileSync(manifestFilePath, { encoding: 'utf-8' }));
  console.log(readFileSync(manifestFilePath, { encoding: 'utf-8' })); // eslint-disable-line
  const scores = extractScores(manifest);
  const svgReport = mkSvgReport(scores);
  if (!existsSync('img/')) {
    mkdirSync('img/');
  }
  writeFileSync('img/lighthouse-report.svg', svgReport);
}
