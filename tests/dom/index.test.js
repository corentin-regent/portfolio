import fs from 'fs';
import { parse as parseHtml } from 'node-html-parser';
import testPageDescription from './page-description.js';
import testPageTitle from './page-title.js';

const domTests = [testPageDescription, testPageTitle];

fs.readdirSync('build/', { recursive: true })
  .filter(path => path.endsWith('index.html'))
  .map(path => 'build/' + path)
  .map(path => ({
    route: path.replace(/^build/, '').replace(/index.html$/, ''),
    content: fs.readFileSync(path),
  }))
  .map(({ content, ...rest }) => ({
    dom: parseHtml(content),
    ...rest,
  }))
  .forEach(page => domTests.forEach(test => test(page)));
